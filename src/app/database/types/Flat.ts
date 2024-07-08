import { ShoppingItem } from "@/app/types/ShoppingItem";

type Flat = {
  tenants: string[] // The emails of the tenants in the flat
  joinId: string // The id that can be used to join the flat
  name: string // The name of the flat
  flatId: string // The id of the flat
  shoppingList: ShoppingItem[] // The shopping list of the flat
};

export { type Flat };
