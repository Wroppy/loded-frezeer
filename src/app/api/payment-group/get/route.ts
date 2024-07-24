import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

type ReqProps = {
  email: string;
};

export async function POST(req: Request) {
  const { email } = (await req.json()) as ReqProps;
  try {
    const db = new DatabaseManager();
    const groups = await db.getPaymentGroups(email);
    
    return NextResponse.json({groups});
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
