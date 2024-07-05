import { ShoppingItem } from "./ShoppingItem";

type ShoppingListContextType = {
  shoppingList: ShoppingItem[];
  addItem: (itemName: string, quantity: number, itemFor: string[]) => void;
  removeItem: (id: string) => void;
  updateItem: (newItem: ShoppingItem) => void;
};

export { type ShoppingListContextType };
