"use client";

import React from "react";
import styles from "./shopping-list-page.module.scss";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ShoppingListPageHeader from "../components/ShoppingListPageHeader/ShoppingListPageHeader";
import { ShoppingListContext } from "../context/ShoppingListContext";
import { ShoppingItem } from "../types/ShoppingItem";

type Props = {};

const ShoppingListPage = (props: Props) => {
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

  const addItem = (item: ShoppingItem) => {};

  const removeItem = (id: string) => {};

  const updateItem = (newItem: ShoppingItem) => {};

  return (
    <ShoppingListContext.Provider
      value={{ shoppingList, addItem, removeItem, updateItem }}
    >
      <div className={styles.ShoppingListPage}>
        <ShoppingListPageHeader />
        <ShoppingList />
      </div>
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListPage;
