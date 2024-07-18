import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

type ReqProps = {
  user: string;
};

export async function POST(req: Request) {
  const { user } = (await req.json()) as ReqProps;

  try {
    const db = new DatabaseManager();
    const clientUser = await db.getClientUser(user);

    return NextResponse.json({user: clientUser});
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
