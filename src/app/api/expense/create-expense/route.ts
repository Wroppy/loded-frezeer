import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";
import { CreateExpensePostBody } from "@/app/types/CreateExpenseRoute";

export async function POST(req: Request) {
  const body = (await req.json()) as CreateExpensePostBody;
  const { to, amount, description, email } = body;

  const db = new DatabaseManager();
  try {
    const from = await db.getUser(email);
    if (!from) {
      throw new Error("User not found");
    }

    await db.createExpense(from, to, amount, description);
  } catch (e) {
    console.log("Error", e);
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
  });
}
