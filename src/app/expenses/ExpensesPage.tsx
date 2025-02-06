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

type ExpenseSummaryTableProps = {
  expenses: UserExpenseSummary[];
  heading: string;
};
const ExpenseSummaryTable = ({
  expenses,
  heading,
}: ExpenseSummaryTableProps) => {
  return (
    <div className={styles.ExpenseSummaryTable}>
      <div>
        <h2>{heading}</h2>
      </div>
      <Table>
        <TableThead>
          <TableTr>
            <TableTh>Name</TableTh>
            <TableTh>Amount</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>
          {expenses.length === 0 ? (
            <TableTr>
              <TableTd className={styles.TableNoData} colSpan={2}>No Expenses</TableTd>
            </TableTr>
          ) : (
            expenses.map((expense) => (
              <TableTr key={expense.name}>
                <TableTd>{expense.name}</TableTd>
                <TableTd>{expense.amount}</TableTd>
              </TableTr>
            ))
          )}
        </TableTbody>
      </Table>
    </div>
  );
};

const ExpensesPage = async ({ expensesToPay, expensesToReceive }: Props) => {
  return (
    <div className={styles.ExpensesPage}>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.ExpensesPageContent}>
        <ExpenseSummaryTable expenses={[]} heading="Expenses To Pay" />
        <ExpenseSummaryTable
          expenses={expensesToReceive}
          heading="Expenses to Receive"
        />
      </div>
    </div>
  );
};

export default ExpensesPage;
