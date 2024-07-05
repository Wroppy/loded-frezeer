"use client";
import React, { useContext } from "react";
import ShoppingListItem from "./ShoppingListItem/ShoppingListItem";
import styles from "./shopping-list.module.scss";
import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";

type Props = {};

const ShoppingList = (props: Props) => {
  const { shoppingList } = useContext(
    ShoppingListContext
  ) as ShoppingListContextType;

  
  return (
    <div className={styles.ShoppingList}>
      <div className={styles.ShoppingListHeader}>
        <div style={{ flexGrow: 1 }}>Name</div>
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
