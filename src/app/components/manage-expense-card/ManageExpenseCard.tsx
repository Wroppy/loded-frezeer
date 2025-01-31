"use client";

import {
  Button,
  Card,
  ComboboxItem,
  LoadingOverlay,
  NumberInput,
  rem,
  Select,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import styles from "./manage-expense-card.module.scss";
import { IconCurrencyDollar } from "@tabler/icons-react";
import PaymentGroup from "@/app/types/PaymentGroup";
import { useDisclosure } from "@mantine/hooks";
import { CreateExpensePostBody } from "@/app/types/CreateExpenseRoute";
import { postFetch } from "@/app/utils/postFetch";
import { showErrorMessage } from "@/app/utils/showErrorMessage";
import { showSuccessMessage } from "@/app/utils/showSucessMessage";

type Props = { paymentGroups: PaymentGroup[]; email: string };

const ManageExpenseCard = ({ paymentGroups, email }: Props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<string | number>(0);
  const [paymentGroup, setPaymentGroup] = useState<ComboboxItem | null>(null);
  const [loading, { open: setLoadingTrue, close: setLoadingFalse }] =
    useDisclosure(false);

  const resetInputs = () => {
    setName("");
    setAmount(0);
    setPaymentGroup(null);
  };

  const validateInputs = (): boolean => {
    if (!name) {
      showErrorMessage("Error", "Please enter a name for the expense");
      return false;
    }

    if (!amount || Number(amount) <= 0) {
      showErrorMessage("Error", "Please enter an amount for the expense");
      return false;
    }

    if (!paymentGroup) {
      showErrorMessage("Error", "Please select a payment group");
      return false;
    }

    return true;
  };

  const addExpense = async () => {
    setLoadingTrue();

    if (!validateInputs()) {
      setLoadingFalse();
      return;
    }

    // Send data to server
    const body: CreateExpensePostBody = {
      payers: paymentGroups.find((g) => g.id === paymentGroup?.value)!.users,
      amount: Number(amount),
      description: name,
      email,
    };

    const res = await postFetch("/api/expense/create-expense", body);
    if (res.error) {
      console.error(res.error);
      showErrorMessage("Error", "An error occurred while creating the expense");
    } else {
      showSuccessMessage("Success", "Expense created successfully");
      resetInputs();
    }

    setLoadingFalse();
  };

  return (
    <Card className={styles.AddExpenseCard}>
      <LoadingOverlay visible={loading} zIndex={1000} />
      <div className={styles.AddExpenseHeading}>Add Expense</div>
      <div className={styles.AddExpenseBody}>
        <TextInput
          label="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="Expense name"
        />
        <NumberInput
          label="Amount"
          value={amount}
          required
          onChange={(value) => setAmount(value)}
          placeholder="Expense amount"
          min={0}
          clampBehavior="strict"
          allowNegative={false}
          decimalScale={2}
          fixedDecimalScale
          thousandSeparator=","
          leftSection={
            <IconCurrencyDollar
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          }
        />

        <Select
          label="Payment Group"
          placeholder="Select payment group"
          data={paymentGroups.map((g) => ({ value: g.id, label: g.name }))}
          value={paymentGroup ? paymentGroup.value : null}
          onChange={(value, option) => setPaymentGroup(option)}
        />

        {/* Payment Split */}
      </div>
      <div className={styles.addExpenseFooter}>
        <Button variant="outline" onClick={addExpense}>
          Create Expense
        </Button>
      </div>
    </Card>
  );
};

export default ManageExpenseCard;
