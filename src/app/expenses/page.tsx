import React from "react";
import ExpensesPage from "./ExpensesPage";

type Props = {};

const page = async (props: Props) => {
  const content = {
    expensesToPay: [{ name: "Alice", amount: 100 }],
    expensesToReceive: [{ name: "Bob", amount: 50 }],
  };

  return <ExpensesPage {...content} />;
};

export default page;
