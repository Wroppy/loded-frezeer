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
