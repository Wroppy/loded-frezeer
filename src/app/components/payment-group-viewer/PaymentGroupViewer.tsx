import { postFetch } from "@/app/utils/postFetch";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import PaymentGroupView from "./PaymentGroupView";
import PaymentGroup from "@/app/types/PaymentGroup";
import styles from "./payment-group-view.module.scss";

type Props = {};

const PaymentGroupViewer = async (props: Props) => {
  const email = (await getServerSession())!.user!.email!;

  const res = await postFetch("/api/payment-group/get", { email });

  if (res.error) {
    redirect("/flatmates");
  }


  let { groups } = res as { groups: PaymentGroup[] };
  return (
    <div className={styles.PaymentGroupViewer}>
      {groups.map((group, i) => (
        <PaymentGroupView
          email={email}
          key={i}
          paymentGroup={group}
        />
      ))}
    </div>
  );
};

export default PaymentGroupViewer;
