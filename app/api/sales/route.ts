import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const sales = await db.sale.findMany({
      include: {
        user: true,
        items: {
          include: {
            product: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(sales, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des ventes" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId, items, discount = 0, taxAmount = 0, notes } =
      await req.json();

    if (!userId || !items || items.length === 0) {
      return NextResponse.json(
        { error: "UserId et items requis" },
        { status: 400 }
      );
    }

    let total = 0;
    for (const item of items) {
      total += item.price * item.quantity - item.discount;
    }

    const sale = await db.sale.create({
      data: {
        userId,
        discount,
        total: total,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
        user: true,
      },
    });

    // Update product quantities
    for (const item of items) {
      await db.product.update({
        where: { id: item.productId },
        data: {
          quantity: {
            decrement: item.quantity,
          },
        },
      });

      // Create stock movement
      await db.stockMovement.create({
        data: {
          type: "SALE",
          quantity: -item.quantity,
          productId: item.productId,
          reason: `Vente #${sale.id}`,
        },
      });
    }

    return NextResponse.json(sale, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la création de la vente" },
      { status: 500 }
    );
  }
}
