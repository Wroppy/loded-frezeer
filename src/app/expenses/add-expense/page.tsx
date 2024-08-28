import React from "react";
import styles from "./add-expense.module.scss";
import ManageExpenseCard from "@/app/components/manage-expense-card/ManageExpenseCard";
import { getServerSession } from "next-auth";
import { postFetch } from "@/app/utils/postFetch";
import PaymentGroup from "@/app/types/PaymentGroup";

type Props = {};

const page = async (props: Props) => {
  const email = (await getServerSession())!.user!.email!;

  const groupRes = await postFetch("/api/payment-group/get", { email });
  if (groupRes.error) {
    return (<div>{groupRes.error}</div>);
  }

  const { groups } = groupRes as { groups: PaymentGroup[] };

  return (
    <div className={styles.AddExpensePage}>
      <ManageExpenseCard paymentGroups={groups} />
    </div>
  );
};

export default page;
