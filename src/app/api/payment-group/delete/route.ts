import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

type ReqProps = {
  id: string;
  email: string;
};

export async function POST(req: Request) {
  const { id, email } = (await req.json()) as ReqProps;

  try {
    const db = new DatabaseManager();
    await db.deletePaymentGroup(id, email);

    return NextResponse.json({});
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 400 });
    }

    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
