"use client";

import {
  Button,
  Card,
  ComboboxItem,
  NumberInput,
  rem,
  Select,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import styles from "./manage-expense-card.module.scss";
import { IconCurrencyDollar } from "@tabler/icons-react";
import PaymentGroup from "@/app/types/PaymentGroup";

type Props = { paymentGroups: PaymentGroup[] };

const ManageExpenseCard = ({ paymentGroups }: Props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<string | number>(0);
  const [paymentGroup, setPaymentGroup] = useState<ComboboxItem | null>(null);

  const addExpense = async () => {
    console.log("Adding Expense");
  };

  return (
    <Card className={styles.AddExpenseCard}>
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
