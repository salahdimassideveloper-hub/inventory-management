import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const movements = await db.stockMovement.findMany({
      include: {
        product: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(movements, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des mouvements" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { type, quantity, reason, productId, userId } = await req.json();

    if (!type || !quantity || !productId) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    const movement = await db.stockMovement.create({
      data: {
        type,
        quantity,
        reason,
        productId,
      },
      include: {
        product: true,
      },
    });

    // Update product quantity
    await db.product.update({
      where: { id: productId },
      data: {
        quantity: {
          increment: quantity,
        },
      },
    });

    return NextResponse.json(movement, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la création du mouvement" },
      { status: 500 }
    );
  }
}
