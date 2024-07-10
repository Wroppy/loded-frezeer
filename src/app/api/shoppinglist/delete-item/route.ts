import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

type RequestProps = {
  email: string;
  id: string;
};

export async function POST(req: Request) {
  const { email, id } = await req.json();

  try {
    const db = new DatabaseManager();
    await db.deleteShoppingItem(email, id);
    return NextResponse.json({});
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 400 });
    }
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
