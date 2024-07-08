import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { email } = (await req.json()) as { email: string };

  try {
    const db = new DatabaseManager();
    const flat = await db.getUserFlatClient(email);

    return NextResponse.json({ flat });
  } catch (error) {
    return NextResponse.json({ error: "Error getting flat" }, { status: 500 });
  }
}