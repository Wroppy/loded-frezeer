import DatabaseManager from "@/app/database/DatabaseManager";
import { NextResponse } from "next/server";

type RequestProps = {
  email: string;
  newItemName: string;
  newItemQuantity: number;
  newItemFor: string[];
  id: string;
};

export async function POST(req: Request) {
  const { email, newItemName, newItemQuantity, newItemFor, id } =
    (await req.json()) as RequestProps;

  try {
    const db = new DatabaseManager();
    const updatedShoppingItem = await db.updateShoppingItem(
      email,
      id,
      newItemName,
      newItemQuantity,
      newItemFor
    );
    return NextResponse.json(updatedShoppingItem);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
