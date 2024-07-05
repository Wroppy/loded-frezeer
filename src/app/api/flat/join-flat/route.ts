import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, flatJoinCode } = await req.json();

  try {
    // Add the user to the flat
    const db = new DatabaseManager();
    const flat = await db.joinFlat(email, flatJoinCode);

    return NextResponse.json({ error: null, flat });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message, flat: null },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "An error occurred", flat: null },
      { status: 500 }
    );
  }
}
