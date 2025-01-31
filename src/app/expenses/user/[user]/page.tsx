import React, { Suspense } from "react";
import styles from "./user-expenses.module.scss";
import UserExpensesHeading from "./UserExpensesHeading";
import { getServerSession } from "next-auth";
import OutgoingExpensesTable from "@/app/components/outgoing-expenses-table/OutgoingExpensesTable";
import IncomingExpensesTable from "@/app/components/incoming-expenses-table/IncomingExpensesTable";
import PayExpenseCard from "@/app/components/pay-expense-card/PayExpenseCard";

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
        <PayExpenseCard targetUser={targetUser} email={email} />
      </div>
    </div>
  );
};

export default page;
