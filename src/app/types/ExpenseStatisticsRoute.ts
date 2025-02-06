import UserExpenseSummary from "./UserExpenseSummary";

type ExpenseStatisticsPostBody = {
  email: string;
};

type ExpenseStatisticsPostResponse = {
  expensesToPay: UserExpenseSummary[];
  expensesToReceive: UserExpenseSummary[];
};

export { type ExpenseStatisticsPostBody, type ExpenseStatisticsPostResponse };
