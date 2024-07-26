import PaymentGroup from "@/app/types/PaymentGroup";
import { Card } from "@mantine/core";
import React from "react";
import styles from "./payment-group-view.module.scss";

type Props = {
  paymentGroup: PaymentGroup;
};

const PaymentGroupView = ({ paymentGroup }: Props) => {
  return (
    <Card className={styles.PaymentGroupView}>
      <h2>{paymentGroup.name}</h2>
      <div>
        <h4>
          Members:
        </h4>
        <div className={styles.UsersListView}>
          {paymentGroup.users.map((user, index) => (
            <div key={index}>{user.name}</div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PaymentGroupView;
