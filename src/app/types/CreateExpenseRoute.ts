import ClientUser from "./ClientUser";

type CreateExpensePostBody = {
  payers: ClientUser[];
  amount: number;
  description: string;
  email: string;
};

type CreateExpensePostResponse = {
  success: boolean;
};

export { type CreateExpensePostBody, type CreateExpensePostResponse };
