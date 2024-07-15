import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

type ReqProps = {
  email: string;
};

export async function POST(req: Request) {
  const { email }: ReqProps = await req.json();
  try {
    // Add chore to database
    const db = new DatabaseManager();
    const user = await db.getClientChores(email);
    return NextResponse.json({ user, error: null });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
