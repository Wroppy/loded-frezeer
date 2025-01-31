import { getServerSession } from "next-auth";
import React from "react";
import ExpenseTable from "../expense-table/ExpenseTable";
import ExpenseView from "../expense-view/ExpenseView";
import ExpenseStatus from "@/app/Enums/ExpenseStatus";
import ClientExpense from "@/app/types/ClientExpense";

type Props = { targetUser: string };

const OutgoingExpensesTable = async (props: Props) => {
  const email = (await getServerSession())!.user!.email!;
  const expenses: ClientExpense[] = [
    {
      id: "1",
      description: "Pizza",
      amount: 10,
      date: new Date(),
      from: { email: "wxwong806@gmail.com", name: "Weyman" },
      to: { email: "wxwong807@gmail.com", name: "Bob" },
      status: ExpenseStatus.Pending,
    },
    {
      id: "2",
      description: "Burger",
      amount: 5,
      date: new Date(),
      from: { email: "wxwong807@gmail.com", name: "Bob" },
      to: { email: "wxwong806@gmail.com", name: "Weyman" },
      status: ExpenseStatus.Paid,
    },
    {
      id: "3",
      description: "Sushi",
      amount: 999,
      date: new Date(),
      from: { email: "wxwong807@gmail.com", name: "Bob" },
      to: { email: "wxwong806@gmail.com", name: "Weyman" },
      status: ExpenseStatus.Partial,
    },
  ];

  return (
    <ExpenseTable heading="Out Going Expenses" moneyColumnText="Amount">
      {expenses.map((expense) => (
        <ExpenseView expense={expense} key={expense.id} email={email} />
      ))}
    </ExpenseTable>
  );
};

export default OutgoingExpensesTable;
