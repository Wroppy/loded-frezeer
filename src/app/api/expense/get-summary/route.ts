import DatabaseManager from "@/app/database/DatabaseManager";
import { ExpenseStatisticsPostBody } from "@/app/types/ExpenseStatisticsRoute";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = (await req.json()) as ExpenseStatisticsPostBody;

  const db = new DatabaseManager();
  try {
    const response = await db.getExpensesSummary(email);
    return NextResponse.json({ success: true, ...response });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
