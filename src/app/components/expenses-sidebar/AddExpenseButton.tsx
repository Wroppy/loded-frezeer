import React from "react";
import SidebarNavLink from "./SidebarNavLink";

type Props = {};

const AddExpenseButton = (props: Props) => {
  return <SidebarNavLink label="Add Expense" href="/expenses/add-expense" />;
};

export default AddExpenseButton;
