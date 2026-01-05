import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const suppliers = await db.supplier.findMany({
      include: {
        products: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(suppliers, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des fournisseurs" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      phone,
      address,
    } = await req.json();

    if (!name) {
      return NextResponse.json(
        { error: "Le nom du fournisseur est requis" },
        { status: 400 }
      );
    }

    const supplier = await db.supplier.create({
      data: {
        name,
        email,
        phone,
        address,
      },
    });

    return NextResponse.json(supplier, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de la création du fournisseur" },
      { status: 500 }
    );
  }
}
