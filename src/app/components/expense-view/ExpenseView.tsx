import ExpenseStatus from "@/app/Enums/ExpenseStatus";
import Expense from "@/app/types/Expense";
import { toTwoDp } from "@/app/utils/toTwoDp";
import { TableTr, TableTd, Flex } from "@mantine/core";
import { IconPointFilled } from "@tabler/icons-react";
import React from "react";
import styles from "./expense-view.module.scss";

type Props = {
  expense: Expense;
  email: string;
};

const toClassName = (status: ExpenseStatus) => {
  switch (status) {
    case ExpenseStatus.Paid:
      return styles.IconPaid;
    case ExpenseStatus.Pending:
      return styles.IconPending;
    case ExpenseStatus.Partial:
      return styles.IconPartial;
  }
};

const ExpenseView = ({ expense }: Props) => {
  return (
    <TableTr key={expense.id}>
      <TableTd>
        <Flex align={"center"} gap={4}>
          <IconPointFilled className={toClassName(expense.status)} />
          <span>{expense.status}</span>
        </Flex>
      </TableTd>
      <TableTd>{expense.description}</TableTd>
      <TableTd>${toTwoDp(expense.amount)}</TableTd>
    </TableTr>
  );
};

export default ExpenseView;
