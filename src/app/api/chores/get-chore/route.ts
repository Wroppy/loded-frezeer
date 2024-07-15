import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

type ReqProps = {
  email: string;
  choreId: string;
};

export async function POST(req: Request) {
  const { email, choreId } = (await req.json()) as ReqProps;

  try {
    // Gets the specific chore from the database
    const db = new DatabaseManager();
    const chore = await db.getChore(email, choreId);
    return NextResponse.json({ chore, error: null });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 400 });
    }
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
