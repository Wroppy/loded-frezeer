"use client";
import ClientExpense from "@/app/types/ClientExpense";
import { postFetch } from "@/app/utils/postFetch";
import { Button, Card, ComboboxItem, Select } from "@mantine/core";
import React, { useEffect, useState } from "react";
import styles from "./pay-expense-card.module.scss";
import { showSuccessMessage } from "@/app/utils/showSucessMessage";
import { showErrorMessage } from "@/app/utils/showErrorMessage";
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
      setLoadingExpenses(false);
    });
  }, []);

  const payExpense = () => {
    if (!selectedExpense) return;

    setLoadingExpenses(true);
    console.log("expenseId: ", selectedExpense.value),
      postFetch("/api/expense/pay-expense", {
        expenseId: selectedExpense.value,
        payerEmail: email,
        payeeEmail: targetUser,
      }).then((res) => {
        if (res.success) {
          showSuccessMessage("Success", "Expense paid successfully");
          setSelectedExpense(null);
        } else {
          showErrorMessage("Error", "Failed to pay expense");
        }

        setLoadingExpenses(false);
      });
  };

  const [selectedExpense, setSelectedExpense] = useState<ComboboxItem | null>(
    null
  );
  const [expenses, setExpenses] = useState<SelectItem[]>([]);
  const [loadingExpenses, setLoadingExpenses] = useState(true);

  return (
    <Card className={styles.PayExpenseCard}>
      <div className={styles.ExpenseSelect}>
        <Select
          value={selectedExpense ? selectedExpense.value : null}
          data={expenses}
          disabled={loadingExpenses}
          readOnly={loadingExpenses || !expenses.length}
          onChange={(_, option) => setSelectedExpense(option)}
          placeholder={
            !loadingExpenses && !expenses.length
              ? "No Expenses"
              : "Select expense"
          }
          clearable
          allowDeselect
          comboboxProps={{ position: "top" }}
        />
      </div>
      <Button
        onClick={payExpense}
        variant="outline"
        disabled={!selectedExpense}
        className={styles.PayButton}
      >
        Pay
      </Button>
    </Card>
  );
};

export default PayExpenseCard;
