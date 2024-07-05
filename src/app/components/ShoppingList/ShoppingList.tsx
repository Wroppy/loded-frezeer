import React from "react";
import ShoppingListItem from "./ShoppingListItem/ShoppingListItem";
import { ShoppingItem } from "@/app/types/ShoppingItem";
import styles from "./shopping-list.module.scss";

type Props = {};

const ShoppingList = (props: Props) => {
  const shoppingList: ShoppingItem[] = [
    {
      itemName: "Apples",
      quantity: 5,
      for: ["John"],
      id: "1",
      addedBy: "John",
      boughtBy: null,
    },
    {
      itemName: "Bananas",
      quantity: 7,
      for: ["John", "Jane"],
      id: "2",
      addedBy: "John",
      boughtBy: "Jane",
    },
  ];
  return (
    <div className={styles.ShoppingList}>
      <div className={styles.ShoppingListHeader}>
        <div style={{flexGrow: 1}}>Name</div>
        <div>Quantity</div>
      </div>

      <div className={styles.ShoppingListBody}>
        {shoppingList.map((item) => (
          <ShoppingListItem key={item.id} shoppingItem={item} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
