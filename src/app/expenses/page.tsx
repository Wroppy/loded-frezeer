import React from "react";
import ExpensesPage from "./ExpensesPage";
import { postFetch } from "../utils/postFetch";
import { getServerSession } from "next-auth";
import { ExpenseStatisticsPostResponse } from "../types/ExpenseStatisticsRoute";
type Props = {};

const page = async (props: Props) => {
  const email = (await getServerSession())!.user!.email!;

  const res = (await postFetch("/api/expense/get-summary", {
    email,
  })) as ExpenseStatisticsPostResponse;

  return <ExpensesPage {...res} />;
};

export default page;
