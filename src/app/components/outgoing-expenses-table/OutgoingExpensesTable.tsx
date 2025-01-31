import { getServerSession } from "next-auth";
import React from "react";
import ExpenseTable from "../expense-table/ExpenseTable";
import ExpenseView from "../expense-view/ExpenseView";
import ExpenseStatus from "@/app/Enums/ExpenseStatus";
import ClientExpense from "@/app/types/ClientExpense";
import { postFetch } from "@/app/utils/postFetch";
import { GetTargetExpenseBody } from "@/app/types/GetTargetExpenseRoute";

type Props = { targetUser: string };

const OutgoingExpensesTable = async ({ targetUser }: Props) => {
  const email = (await getServerSession())!.user!.email!;

  const getExpenses = async () => {
    const response = await postFetch(`/api/expense/get-target-expense`, {
      targetEmail: targetUser,
      email,
    } as GetTargetExpenseBody);
    console.log(response);

    if (response.error) {
      return [];
    }

    return response.expenses.reverse();
  };

  const expenses: ClientExpense[] = await getExpenses();

  return (
    <ExpenseTable heading="Expenses to pay">
      {expenses.map((expense) => (
        <ExpenseView expense={expense} key={expense.id} email={email} />
      ))}
    </ExpenseTable>
  );
};

export default OutgoingExpensesTable;
