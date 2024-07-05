import { ShoppingItem } from "./ShoppingItem";

type ShoppingListContextType = {
  shoppingList: ShoppingItem[];
  addItem: (item: ShoppingItem) => void;
  removeItem: (id: string) => void;
  updateItem: (newItem: ShoppingItem) => void;
};

export { type ShoppingListContextType };
