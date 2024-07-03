import DatabaseManager from "@/app/database/DatabaseManager";
import { UserRegister } from "@/app/database/types/UserRegister";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { name, email, password } = (await req.json()) as UserRegister;
  try {
    const db = new DatabaseManager();
    await db.createUser(name, email, password);

    return NextResponse.json({});
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
