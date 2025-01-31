import { PayExpensePostBody } from "@/app/types/PayExpenseRoute";
import { NextResponse } from "next/server";

async function POST(req: Request, res: Response) {
  const body = (await req.json()) as PayExpensePostBody;
  const { expenseId, payerEmail, payeeEmail } = body;
  
  try {
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export default POST;
