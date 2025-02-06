import UserExpenseSummary from "@/app/types/UserExpenseSummary";
import React from "react";
import styles from "./summaries.module.scss";
import ExpenseTable from "../expense-table/ExpenseTable";
import { ExpenseSummaryTable } from "@/app/expenses/ExpensesPage";

type Props = { expensesToPay: UserExpenseSummary[] };

const ExpenseSummary = ({ expensesToPay }: Props) => {
  return (
    <div className={styles.ExpenseSummary}>
      <ExpenseSummaryTable expenses={expensesToPay} heading="Expenses To Pay" />
    </div>
  );
};

export default ExpenseSummary;
