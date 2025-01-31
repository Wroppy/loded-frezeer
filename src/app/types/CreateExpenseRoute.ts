import ClientUser from "./ClientUser";

type CreateExpensePostBody = {
  to: ClientUser[];
  amount: number;
  description: string;
  email: string;
};

type CreateExpensePostResponse = {
  success: boolean;
};

export { type CreateExpensePostBody, type CreateExpensePostResponse };
