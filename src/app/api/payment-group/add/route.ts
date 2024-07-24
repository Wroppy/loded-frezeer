import DatabaseManager from "@/app/database/DatabaseManager";
import ClientUser from "@/app/types/ClientUser";
import { NextResponse } from "next/server";

type ReqProps = {
  email: string;
  name: string;
  users: ClientUser[];
};

export async function POST(req: Request) {
  const { email, name, users } = (await req.json()) as ReqProps;
  try {
    const db = new DatabaseManager();
    await db.addPaymentGroup(email, name, users);

    return NextResponse.json({});
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
