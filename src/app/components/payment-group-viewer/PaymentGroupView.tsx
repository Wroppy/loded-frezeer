"use client";

import PaymentGroup from "@/app/types/PaymentGroup";
import { ActionIcon, Card, Flex, useRadioCardContext } from "@mantine/core";
import React, { useState } from "react";
import styles from "./payment-group-view.module.scss";
import ConfirmButton from "../confirm-button/ConfirmButton";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { postFetch } from "@/app/utils/postFetch";
import { showErrorMessage } from "@/app/utils/showErrorMessage";
import { useRouter } from "next/navigation";

type Props = {
  paymentGroup: PaymentGroup;
  email: string;
};

const PaymentGroupView = ({ paymentGroup, email }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onDelete = async () => {
    setLoading(true);

    const res = await postFetch("/api/payment-group/delete", {
      id: paymentGroup.id,
      email,
    });

    if (res.error) {
      showErrorMessage("Failed to delete payment group", res.error);
      return;
    }

    setLoading(false);
    router.refresh();
  };

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
          <ActionIcon variant="outline" loading={loading}>
            <IconEdit style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
          <ConfirmButton onClick={onDelete} text="Are you sure?" loading={loading}>
            <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ConfirmButton>
        </Flex>
      </div>
    </Card>
  );
};

export default PaymentGroupView;
