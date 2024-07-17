import React from "react";
import styles from "./expenses.module.scss";
import ExpensesSidebar from "../components/expenses-sidebar/ExpensesSidebar";
import { Divider } from "@mantine/core";
type Props = { children: React.ReactNode };

const layout = ({ children }: Props) => {
  return (
    <div className={styles.ExpensesLayout}>
      <ExpensesSidebar />
      <Divider orientation="vertical" />
      <div className={styles.ExpensesMainContent}>{children}</div>
    </div>
  );
};

export default layout;
