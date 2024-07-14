import { ShoppingItem } from "@/app/types/ShoppingItem";
import { Flat } from "../types/Flat";
import { User } from "../types/User";
import { getRandomId } from "../Utils";
import ServerChore from "@/app/types/ServerChore";
import ChoreCycles from "@/app/Enums/ChoreCycles";

export const UserTemplate = (
  name: string,
  email: string,
  password: string
): User => {
  return {
    name,
    email,
    password,
    userId: getRandomId(),
    inFlat: false,
    setUp: false,
  };
};

export const FlatTemplate = (name: string, userEmail: string): Flat => {
  return {
    name,
    tenants: [userEmail],
    joinId: getRandomId(),
    flatId: getRandomId(),
    shoppingList: [],
  };
};

export const ShoppingItemTemplate = (
  name: string,
  quantity: number,
  itemFor: string[],
  userEmail: string
): ShoppingItem => {
  return {
    itemName: name,
    quantity,
    itemFor,
    id: getRandomId(),
    addedBy: userEmail,
    boughtBy: null,
  };
};

export const ChoreTemplate = (
  flatId: string,
  name: string,
  description: string,
  expectedCycle: ChoreCycles,
  expectedUser: string,
  order: string[]
): ServerChore => {
  return {
    flatId,
    id: getRandomId(),
    name,
    description,
    expectedCycle,
    lastCompleted: new Date(),
    previousUser: null,
    expectedUser,
    order,
  };
};
