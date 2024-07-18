import Expense from "@/app/types/Expense";
import React from "react";

type Props = {
  expense: Expense;
  owes: boolean;
};

const ExpenseView = ({ expense, owes }: Props) => {
  return <div></div>;
};

export default ExpenseView;
