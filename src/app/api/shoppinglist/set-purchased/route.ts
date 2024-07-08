import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

type RequestBody = {
  email: string;
  checkedItems: string[];
};

export async function POST(req: Request) {
  const { email, checkedItems }: RequestBody = await req.json();

  try {
    await (new DatabaseManager()).setPurchased(email, checkedItems);
    return NextResponse.json({});
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json(e.message, { status: 400 });
    }

    return NextResponse.json("Unknown error", { status: 500 });
  }
}
