import { Flat } from "../types/Flat";
import { User } from "../types/User";
import { getRandomId } from "../Utils";

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
  }
};
