import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json() as { email: string };

  const props = await (new DatabaseManager()).getShoppingPageProps(email);
  console.log(`Props" ${JSON.stringify(props)}`)
  return NextResponse.json(props);
}