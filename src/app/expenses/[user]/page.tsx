import Expense from "@/app/types/Expense";
import React, { Suspense } from "react";
import styles from "./user-expenses.module.scss";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import UserExpensesHeading from "./UserExpensesHeading";

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
    },
    {
      id: "2",
      description: "Burger",
      amount: 5,
      date: new Date(),
      from: { email: "wxwong807@gmail.com", name: "Bob" },
      to: { email: "wxwong806@gmail.com", name: "Weyman" },
    },
  ];

  return (
    <div className={styles.UserExpenses}>
      <Suspense>
        <UserExpensesHeading targetUser={targetUser} />
      </Suspense>
    </div>
  );
};

export default page;
