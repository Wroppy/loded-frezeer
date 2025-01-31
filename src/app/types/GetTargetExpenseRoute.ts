import ClientExpense from "./ClientExpense";

type GetTargetExpenseBody = {
  email: string;
  targetEmail: string;
};

type GetTargetExpenseResponse = {
  success: boolean;
  expenses: ClientExpense[];
};

export { type GetTargetExpenseBody, type GetTargetExpenseResponse };
