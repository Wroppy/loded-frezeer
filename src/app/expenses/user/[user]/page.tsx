import ClientExpense from "@/app/types/ClientExpense";
import React, { Suspense } from "react";
import styles from "./user-expenses.module.scss";
import { ActionIcon, Card, TableTd, TableTr, Tooltip } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import UserExpensesHeading from "./UserExpensesHeading";
import ExpenseTable from "@/app/components/expense-table/ExpenseTable";
import { toTwoDp } from "@/app/utils/toTwoDp";
import ExpenseStatus from "@/app/Enums/ExpenseStatus";
import ExpenseView from "@/app/components/expense-view/ExpenseView";
import { getServerSession } from "next-auth";
import OutgoingExpensesTable from "@/app/components/outgoing-expenses-table/OutgoingExpensesTable";
import IncomingExpensesTable from "@/app/components/incoming-expenses-table/IncomingExpensesTable";

type Props = {
  params: {
    user: string;
  };
};

const page = async ({ params }: Props) => {
  const targetUser = params.user.replace("-", "@");
  const email = (await getServerSession())!.user!.email!;

  return (
    <div className={styles.UserExpenses}>
      <UserExpensesHeading targetUser={targetUser} />
      <div className={styles.ExpensesTables}>
      <OutgoingExpensesTable targetUser={targetUser} />
      <IncomingExpensesTable targetUser={targetUser} />
      </div>
      <div className={styles.UserExpensesFooter}>
        <Card>
          Board
        </Card>
      </div>
    </div>
  );
};

export default page;
