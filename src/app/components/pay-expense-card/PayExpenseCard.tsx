"use client";
import ClientExpense from "@/app/types/ClientExpense";
import { postFetch } from "@/app/utils/postFetch";
import { Button, Card, ComboboxItem, Select } from "@mantine/core";
import React, { useEffect, useState } from "react";

type Props = {
  targetUser: string;
  email: string;
};

type SelectItem = {
  value: string;
  label: string;
};

const PayExpenseCard = ({ targetUser, email }: Props) => {
  useEffect(() => {
    postFetch("/api/expense/get-target-expense", {
      payerEmail: email,
      payeeEmail: targetUser,
    }).then((res) => {
      const e = res.expenses as ClientExpense[];

      const selectValues = e.map((expense) => ({
        value: expense.id,
        label: expense.description,
      }));
      setExpenses(selectValues);
    });
  }, []);

  const [selectedExpense, setSelectedExpense] = useState<ComboboxItem | null>(
    null
  );
  const [expenses, setExpenses] = useState<SelectItem[]>([]);

  return (
    <Card>
      <div>
        <Select
          value={selectedExpense ? selectedExpense.value : null}
          data={expenses}
          onChange={(_, option) => setSelectedExpense(option)}
          placeholder="Select expense"
          clearable
          allowDeselect
        />
      </div>
      <div>
        <Button>Pay</Button>
      </div>
    </Card>
  );
};

export default PayExpenseCard;
