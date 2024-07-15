import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

type ReqProps = {
  email: string;
  choreId: string;
};

export async function POST(req: Request) {
  try {
    const { email, choreId }: ReqProps = await req.json();

    // completes the chore from the database
    const db = new DatabaseManager();
    const { chore, nextExpected } = await db.completeChore(email, choreId);

    return NextResponse.json({
      lastCompleted: chore.lastCompleted,
      previousUser: chore.previousUser,
      expectedUser: chore.expectedUser,
      nextExpectedUser: nextExpected,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "An error occured while deleting the chore" },
      { status: 500 }
    );
  }
}
