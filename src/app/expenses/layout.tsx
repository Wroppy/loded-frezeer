import React, { Suspense } from "react";
import styles from "./expenses.module.scss";
import ExpensesSidebar from "../components/expenses-sidebar/ExpensesSidebar";
import { ActionIcon, Divider } from "@mantine/core";
import ServerSidebar from "../components/expenses-sidebar/ServerSidebar";
import SidebarSkeleton from "../skeletons/expenses/SidebarSkeleton";
type Props = { children: React.ReactNode };

const layout = ({ children }: Props) => {
  return (
    <div className={styles.ExpensesLayout}>
      <Suspense fallback={<SidebarSkeleton />}>
        <ServerSidebar />
      </Suspense>
      <Divider orientation="vertical" />
      <div className={styles.ExpensesMainContent}>{children}</div>
    </div>
  );
};

export default layout;
