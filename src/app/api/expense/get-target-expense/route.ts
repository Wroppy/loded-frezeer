import { NextResponse } from "next/server";
import DatabaseManager from "@/app/database/DatabaseManager";
import { GetTargetExpenseBody } from "@/app/types/GetTargetExpenseRoute";

export async function POST(req: Request) {
  const body = (await req.json()) as GetTargetExpenseBody;
  const { payeeEmail, payerEmail } = body;

  const db = new DatabaseManager();
  try {
    const from = await db.getUser(payeeEmail);
    if (!from) {
      throw new Error("User not found");
    }

    const expenses = await db.getExpenses(payeeEmail, payerEmail);
    return NextResponse.json({
      success: true,
      expenses,
    });
  } catch (e) {
    console.log("Error", e);
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}
