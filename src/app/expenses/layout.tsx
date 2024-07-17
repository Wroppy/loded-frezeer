import React from "react";
import styles from "./expenses.module.scss";
import ExpensesSidebar from "../components/expenses-sidebar/ExpensesSidebar";
import { ActionIcon, Divider } from "@mantine/core";
import ServerSidebar from "../components/expenses-sidebar/ServerSidebar";
type Props = { children: React.ReactNode };

const layout = ({ children }: Props) => {
  return (
    <div className={styles.ExpensesLayout}>
      <ServerSidebar />
      <Divider orientation="vertical" />
      <div className={styles.ExpensesMainContent}>{children}</div>
    </div>
  );
};

export default layout;
