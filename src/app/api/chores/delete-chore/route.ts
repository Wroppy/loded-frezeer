import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

type ReqProps = {
  email: string;
  choreId: string;
};
export async function POST(req: Request) {
  const { email, choreId } = (await req.json()) as ReqProps;

  try {
    const db = new DatabaseManager();
    await db.deleteChore(email, choreId);
    return NextResponse.json({});
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 400 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
