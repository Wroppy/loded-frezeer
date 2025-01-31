import DatabaseManager from "@/app/database/DatabaseManager";
import { PayExpensePostBody } from "@/app/types/PayExpenseRoute";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = (await req.json()) as PayExpensePostBody;
  const { expenseId, payerEmail, payeeEmail } = body;

  try {
    await new DatabaseManager().payExpense(payerEmail, payeeEmail, expenseId);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
