import ClientExpense from "./ClientExpense";

type GetTargetExpenseBody = {
  payerEmail: string;
  payeeEmail: string;
};

type GetTargetExpenseResponse = {
  success: boolean;
  expenses: ClientExpense[];
};

export { type GetTargetExpenseBody, type GetTargetExpenseResponse };
