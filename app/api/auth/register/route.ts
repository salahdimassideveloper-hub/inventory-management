import { createUser, getUserByEmail } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    const { email, password, name, role } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Email, mot de passe et nom sont requis" },
        { status: 400 }
      );
    }

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: "Cet email est déjà utilisé" },
        { status: 409 }
      );
    }

    const user = await createUser(email, password, name, role || "VENDOR");

    return NextResponse.json(
      { message: "Utilisateur créé avec succès", user },
      { status: 201 }
    );
  
}
