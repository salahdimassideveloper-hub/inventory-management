import bcryptjs from "bcryptjs";
import { db } from "./db";

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcryptjs.compare(password, hashedPassword);
}

export async function getUserByEmail(email: string) {
  return db.user.findUnique({
    where: { email },
  });
}

export async function createUser(
  email: string,
  password: string,
  name: string,
  role: string = "VENDOR"
) {
  const hashedPassword = await hashPassword(password);
  return db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role,
    },
  });
}
