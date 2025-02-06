import { ShoppingItem } from "@/app/types/ShoppingItem";
import React from "react";
import styles from "./summaries.module.scss";
import { Table, TableData } from "@mantine/core";

type Props = { items: ShoppingItem[] };

const EmptyItems = () => {
  return (
    <div>
      <h3>No Items</h3>
      <p>There are no items to display</p>
    </div>
  );
};

const ShoppingList = ({ items }: Props) => {
  items.reverse();

  // Limit the number of items displayed to 5
  if (items.length > 5) {
    items = items.slice(0, 5);
  }

  const tableData: TableData = {
    head: ["Name", "Quantity"],
    body: items.map((i) => [i.itemName, i.quantity]),
  };

  return <Table data={tableData} />;
};

const ShoppingListSummary = ({ items }: Props) => {
  return (
    <div className={styles.ShoppingListSummary}>
      <h2>Shopping List Summary</h2>
      <div>
        {items.length === 0 ? <EmptyItems /> : <ShoppingList items={items} />}
      </div>
    </div>
  );
};

export default ShoppingListSummary;
