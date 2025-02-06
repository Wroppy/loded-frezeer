import { Button } from "@mantine/core";
import styles from "./page.module.scss";
import ChoreSummary from "./components/summaries/ChoreSummary";
import ShoppingListSummary from "./components/summaries/ShoppingListSummary";
import ExpenseSummary from "./components/summaries/ExpenseSummary";
import { getServerSession } from "next-auth";
import { postFetch } from "./utils/postFetch";

import { redirect } from "next/navigation";
import { GetDashboardResponse } from "./types/DashboardRoute";
export default async function Home() {
  const session = await getServerSession();
  const email = session?.user?.email;

  if (!email) {
    redirect("/login");
    return null;
  }

  const response = await postFetch("/api/dashboard/get", { email }) as GetDashboardResponse;
  if (!response.success) {
    return <div>Failed to load dashboard data</div>;
  }

  const {chores, userShoppingList, expenses: expensesToPay} = response;

  return (
    <main className={styles.main}>
      <ChoreSummary chores={chores}/>
      <ShoppingListSummary items={userShoppingList} />
      <ExpenseSummary expensesToPay={expensesToPay}/>
    </main>
  );
}
