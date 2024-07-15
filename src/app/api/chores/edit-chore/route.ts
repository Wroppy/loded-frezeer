import DatabaseManager from "@/app/database/DatabaseManager";
import BareBonesChore from "@/app/types/BareBonesChore";
import { NextResponse } from "next/server";

type ReqProps = {
  bareBonesChore: BareBonesChore;
  id: string;
  email: string;
};

export async function POST(req: Request) {
  try {
    const { id, email, bareBonesChore }: ReqProps = await req.json();

    const db = new DatabaseManager();
    await db.editChore(email, id, bareBonesChore);

    return NextResponse.json({});
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "An unknown error occurred." },
      { status: 500 }
    );
  }
}
