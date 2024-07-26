import React, { ReactNode, ElementType } from "react";
import styles from "./expenses-siderbar.module.scss";
import { Text } from "@mantine/core";

type Props = {
  text: string;
  Icon: ElementType;
};

const ExpensesSidebarHeading = ({ text, Icon }: Props) => {
  return (
    <div className={styles.ExpensesSidebarHeader}>
      <Icon className={styles.ExpensesSidebarUserIcon} />
      <Text c="blue">Users</Text>
    </div>
  );
};

export default ExpensesSidebarHeading;
