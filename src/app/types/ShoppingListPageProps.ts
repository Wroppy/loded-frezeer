import { ShoppingItem } from "./ShoppingItem";

type ShoppingListPageProps = {
  shoppingList: ShoppingItem[];
  names: string[];
  email: string;
  userName?: string
};

export { type ShoppingListPageProps };
