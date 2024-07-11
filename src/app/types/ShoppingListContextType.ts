import { ShoppingItem } from "./ShoppingItem";

type ShoppingListContextType = {
  shoppingList: ShoppingItem[];
  addItem: (itemName: string, quantity: number, itemFor: string[]) => void;
  removeItem: (id: string) => void;
  updateItem: (newItem: ShoppingItem) => void;
  updateItems: (newItems: ShoppingItem[]) => void;
  selectedItem: ShoppingItem | null;
  setSelectedItem: (item: ShoppingItem | null) => void;
  clearSelectedItem: () => void;
  email: string;
  name: string;
  tenantNames: string[];
};

export { type ShoppingListContextType };
