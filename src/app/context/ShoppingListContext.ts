import { createContext } from "react";
import { ShoppingListContextType } from "../types/ShoppingListContextType";

export const ShoppingListContext =
  createContext<ShoppingListContextType | null>(null);
