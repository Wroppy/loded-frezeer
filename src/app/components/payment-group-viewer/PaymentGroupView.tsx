"use client";

import PaymentGroup from "@/app/types/PaymentGroup";
import { ActionIcon, Card, Flex } from "@mantine/core";
import React, { useState } from "react";
import styles from "./payment-group-view.module.scss";
import ConfirmButton from "../confirm-button/ConfirmButton";
import { IconEdit, IconTrash } from "@tabler/icons-react";

type Props = {
  paymentGroup: PaymentGroup;
};

const PaymentGroupView = ({ paymentGroup }: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <Card className={styles.PaymentGroupView}>
      <h2>{paymentGroup.name}</h2>
      <div>
        <h4>Members:</h4>
        <div className={styles.UsersListView}>
          {paymentGroup.users.map((user, index) => (
            <div key={index}>{user.name}</div>
          ))}
        </div>
        <Flex justify={"flex-end"} gap="sm">
          <ConfirmButton text="Are you sure?" loading={loading} color="green">
            <IconEdit style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ConfirmButton>
          <ConfirmButton text="Are you sure?" loading={loading}>
            <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ConfirmButton>
        </Flex>
      </div>
    </Card>
  );
};

export default PaymentGroupView;
