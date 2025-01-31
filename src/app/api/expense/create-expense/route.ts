import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";
import { CreateExpensePostBody } from "@/app/types/CreateExpenseRoute";

export async function POST(req: Request) {
  const body = (await req.json()) as CreateExpensePostBody;
  const { payers, amount, description, email } = body;

  const db = new DatabaseManager();
  try {
    const payee = await db.getClientUser(email);
    if (!payee) {
      throw new Error("User not found");
    }

    await db.createExpense(payee, payers, amount, description);
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
