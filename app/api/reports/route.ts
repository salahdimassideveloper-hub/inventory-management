import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { period = "month" } = Object.fromEntries(req.nextUrl.searchParams);

    let startDate = new Date();
    switch (period) {
      case "week":
        startDate.setDate(startDate.getDate() - 7);
        break;
      case "month":
        startDate.setMonth(startDate.getMonth() - 1);
        break;
      case "year":
        startDate.setFullYear(startDate.getFullYear() - 1);
        break;
    }

    // Ventes totales
    const totalSales = await db.sale.aggregate({
      where: {
        createdAt: {
          gte: startDate,
        },
      },
      _sum: {
        total: true,
      },
    });

    // Top produits
    const topProducts = await db.saleItem.groupBy({
      by: ["productId"],
      where: {
        sale: {
          createdAt: {
            gte: startDate,
          },
        },
      },
      _sum: {
        quantity: true,
      },
      orderBy: {
        _sum: {
          quantity: "desc",
        },
      },
      take: 10,
    });

    // Produits en rupture
    const outOfStock = await db.product.findMany({
      where: {
        quantity: {
          lte: 0,
        },
      },
    });

    // Produits en stock faible
    const lowStock = await db.product.findMany({
      where: {
        quantity: {
          gt: 0,
          lte: 5,
        },
      },
    });

    return NextResponse.json(
      {
        period,
        totalSales: totalSales._sum.total || 0,
        topProducts,
        outOfStock: outOfStock.length,
        lowStock: lowStock.length,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des rapports" },
      { status: 500 }
    );
  }
}
