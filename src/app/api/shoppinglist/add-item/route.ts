import { NextResponse } from "next/server";
import { ShoppingItem } from "./../../../types/ShoppingItem";

export async function POST(req: Request) {
    const {shoppingItem, email} = await req.json() as {shoppingItem: ShoppingItem, email: string};
     
    
}