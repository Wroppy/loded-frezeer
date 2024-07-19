import Expense from "@/app/types/Expense";
import React, { Suspense } from "react";
import styles from "./user-expenses.module.scss";
import { ActionIcon, TableTd, TableTr, Tooltip } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import UserExpensesHeading from "./UserExpensesHeading";
import ExpenseTable from "@/app/components/expense-table/ExpenseTable";
import { toTwoDp } from "@/app/utils/toTwoDp";
import ExpenseStatus from "@/app/Enums/ExpenseStatus";

type Props = {
  params: {
    user: string;
  };
};

const page = ({ params }: Props) => {
  const targetUser = params.user.replace("-", "@");

  const expenses: Expense[] = [
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
      status: ExpenseStatus.Approved,
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
    <div className={styles.UserExpenses}>
      <Suspense>
        <UserExpensesHeading targetUser={targetUser} />
      </Suspense>
      <ExpenseTable heading="Expenses" moneyColumnText="Amount">
        {expenses.map((expense) => (
          <TableTr key={expense.id}>
            <TableTd>{expense.description}</TableTd>
            <TableTd>${toTwoDp(expense.amount)}</TableTd>
          </TableTr>
        ))}
      </ExpenseTable>
    </div>
  );
};

export default page;
