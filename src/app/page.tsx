import { Button } from "@mantine/core";
import styles from "./page.module.scss";
import ChoreSummary from "./components/summaries/ChoreSummary";
import ShoppingListSummary from "./components/summaries/ShoppingListSummary";
import ExpenseSummary from "./components/summaries/ExpenseSummary";

export default function Home() {
  return (
    <main className={styles.main}>
      <ChoreSummary />
      <ShoppingListSummary />
      <ExpenseSummary />
    </main>
  );
}
