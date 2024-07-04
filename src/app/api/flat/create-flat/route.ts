import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, name } = (await req.json()) as { email: string; name: string };

  const db = new DatabaseManager();

  const flat = await db.createFlat(name, email);

  return NextResponse.json({
    tenants: flat.tenants,
    name: flat.name,
    joinId: flat.joinId,
  });
}
