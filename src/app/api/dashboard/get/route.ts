import { NextResponse } from "next/server";
import { GetDashboardBody } from "@/app/types/DashboardRoute";

import DatabaseManager from "@/app/database/DatabaseManager";

export async function POST(req: Request) {
  const { email } = (await req.json()) as GetDashboardBody;

  try {
    const db = new DatabaseManager();
    const summaries = await db.getDashboardData(email);
    return NextResponse.json({ success: true, ...summaries });

  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
