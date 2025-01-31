type PayExpensePostBody = {
  expenseId: string;
  payerEmail: string;
  payeeEmail: string;
};

type PayExpensePostResponse = {
  success: boolean;
};

export { type PayExpensePostBody, type PayExpensePostResponse };
