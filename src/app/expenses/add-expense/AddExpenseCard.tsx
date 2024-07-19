"use client";

import { Card, NumberInput, rem, TextInput } from "@mantine/core";
import React, { useState } from "react";
import styles from "./add-expense.module.scss";
import { IconCurrencyDollar } from "@tabler/icons-react";

type Props = {};

const AddExpenseCard = (props: Props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<string | number>(0);

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
      </div>
    </Card>
  );
};

export default AddExpenseCard;
