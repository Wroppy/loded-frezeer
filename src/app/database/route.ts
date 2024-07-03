import { NextResponse } from "next/server";
import DatabaseManager from "./DatabaseManager";

export async function GET(request: Request, response: Response) {
  new DatabaseManager();

  return NextResponse.json({ message: "Hello, World!" });
}
