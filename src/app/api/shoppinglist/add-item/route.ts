import { NextResponse } from "next/server";
import DatabaseManager from "@/app/database/DatabaseManager";
import { ShoppingItemTemplate } from "@/app/database/models/ModelTemplates";

type RequestBody = {
  itemName: string;
  itemFor: string[];
  quantity: number;
  email: string;
};

export async function POST(req: Request) {
  const { itemName, quantity, itemFor, email } =
    (await req.json()) as RequestBody;

  try {
    const shoppingItem = ShoppingItemTemplate(
      itemName,
      quantity,
      itemFor,
      email
    );
    await new DatabaseManager().addShoppingItem(email, shoppingItem);
    return NextResponse.json({ shoppingItem, error: null });
  } catch (e) {
    return NextResponse.json(
      { shoppingItem: null, error: "Error adding item to shopping list" },
      { status: 500 }
    );
  }
}
