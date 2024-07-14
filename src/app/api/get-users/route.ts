import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

type ReqProps = {
  email: string;
};

export async function POST(req: Request) {
  const { email } = (await req.json()) as ReqProps;

  try {
    if (!email) {
      throw new Error("Email is required");
    }
    const db = new DatabaseManager();
    const users = await db.getFlatTenants(email);
    return NextResponse.json({ users });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 400 });
    }
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
