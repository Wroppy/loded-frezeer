type ShoppingItem = {
  itemName: string;
  quantity: number;
  itemFor: string[];
  id: string;
  addedBy: string;
  boughtBy: string | null;
};

export { type ShoppingItem };
