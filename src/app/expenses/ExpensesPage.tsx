import React from "react";
import styles from "./expenses.module.scss";
import {
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import UserExpenseSummary from "../types/UserExpenseSummary";

type Props = {
  expensesToPay: UserExpenseSummary[];
  expensesToReceive: UserExpenseSummary[];
};

const ExpensesPage = async ({ expensesToPay, expensesToReceive }: Props) => {
  return (
    <div className={styles.ExpensesPage}>
      <div>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default ExpensesPage;
