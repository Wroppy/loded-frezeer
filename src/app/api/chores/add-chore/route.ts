import { NextResponse } from "next/server";
import BareBonesChore from "@/app/types/BareBonesChore";
import DatabaseManager from "@/app/database/DatabaseManager";

type ReqProps = {
  email: string;
  bareBonesChore: BareBonesChore;
};

export async function POST(req: Request) {
  const { email, bareBonesChore }: ReqProps = await req.json();
  try {
    // Add chore to database
    const db = new DatabaseManager();
    const { name, description, expectedCycle, expectedUser, order } =
      bareBonesChore;

    const orderEmails = order.map((user) => user.email);

    const chore = await db.createChore(
      email,
      name,
      description,
      expectedCycle,
      expectedUser,
      orderEmails
    );
    return NextResponse.json({ error: null });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
