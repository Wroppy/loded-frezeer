"use client";

import ClientUser from "@/app/types/ClientUser";
import PaymentGroup from "@/app/types/PaymentGroup";
import { postFetch } from "@/app/utils/postFetch";
import { Button, Card, MultiSelect, Select, TextInput } from "@mantine/core";
import { redirect, useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import styles from "./manage-payment-group.module.scss";
import { showErrorMessage } from "@/app/utils/showErrorMessage";

type Props = {
  title: string;
  buttonText: string;
  paymentGroup?: PaymentGroup;
  users: ClientUser[];
  redirectUrl: string;
  fetchUrl: string;
  email: string;
};

const ManagePaymentGroupCard = ({
  title,
  buttonText,
  users,
  paymentGroup,
  redirectUrl,
  fetchUrl,
  email,
}: Props) => {
  // States for the payment group
  const [name, setName] = useState(paymentGroup?.name || "");
  const [selectedUsers, setSelectedUsers] = useState<ClientUser[]>(
    paymentGroup?.users || []
  );

  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setName(name.trim());

    if (!name) {
      showErrorMessage(
        "An Error occurred while creating a payment group",
        "The name field is required"
      );
      return;
    }

    if (selectedUsers.length === 0) {
      showErrorMessage(
        "An Error occurred while creating a payment group",
        "At least one user must be selected"
      );
      return;
    }

    const res = await postFetch(fetchUrl, {
      email,
      name,
      users: selectedUsers,
      id: paymentGroup?.id,
    });

    if (res.error) {
      showErrorMessage(
        "An Error occurred while creating a payment group",
        res.error
      );
      return;
    }

    router.push(redirectUrl);
  };

  return (
    <Card className={styles.ManagePaymentGroupCardParent}>
      <form onSubmit={handleSubmit} className={styles.ManagePaymentGroupCard}>
        <div className={styles.ManagePaymentGroupHeader}>{title}</div>
        <div className={styles.ManagePaymentGroupBody}>
          <TextInput
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder={"Enter Payment Group Name"}
          />
          <MultiSelect
            label="Users"
            placeholder="Select users"
            data={users.map((user) => {
              return { value: user.email, label: user.name };
            })}
            value={selectedUsers.map((user) => user.email)}
            onChange={(values) => {
              setSelectedUsers(
                users.filter((user) => values.includes(user.email))
              );
            }}
            required
          />
        </div>
        <div className={styles.ManagePaymentGroupFooter}>
          <Button variant="outline" color="red">
            Cancel
          </Button>
          <Button type="submit">{buttonText}</Button>
        </div>
      </form>
    </Card>
  );
};

export default ManagePaymentGroupCard;
