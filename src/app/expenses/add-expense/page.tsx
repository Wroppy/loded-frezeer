import React from "react";
import { Card } from "@mantine/core";
import AddExpenseCard from "./AddExpenseCard";
import styles from "./add-expense.module.scss";

type Props = {};

const page = (props: Props) => {
  return (
    <div className={styles.AddExpensePage}>
      <AddExpenseCard />
    </div>
  );
};

export default page;
