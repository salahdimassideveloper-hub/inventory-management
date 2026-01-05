import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
    const products = await db.product.findMany({
      include: {
        category: true,
        supplier: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(products, { status: 200 });
  
}

export async function POST(req: NextRequest) {
    const {
      name,
      barcode,
      description,
      purchasePrice,
      sellingPrice,
      categoryId,
      supplierId,
      image,
      minQuantity,
    } = await req.json();

    if (!name || !categoryId || !purchasePrice || !sellingPrice) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    const product = await db.product.create({
      data: {
        name,
        barcode,
        description,
        purchasePrice,
        sellingPrice,
        categoryId,
        supplierId,
        image,
        minQuantity: minQuantity || 5,
      },
      include: {
        category: true,
        supplier: true,
      },
    });

    return NextResponse.json(product, { status: 201 });

}
