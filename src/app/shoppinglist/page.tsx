"use client";

import React, { useState } from "react";
import styles from "./shopping-list-page.module.scss";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ShoppingListPageHeader from "../components/ShoppingListPageHeader/ShoppingListPageHeader";
import { ShoppingListContext } from "../context/ShoppingListContext";
import { ShoppingItem } from "../types/ShoppingItem";

type Props = {};

const ShoppingListPage = (props: Props) => {
  const [shoppingList, setShoppingList] = useState([
    {
      itemName: "Apples",
      quantity: 5,
      itemFor: ["John"],
      id: "1",
      addedBy: "John",
      boughtBy: null,
    },
    {
      itemName: "Bananas",
      quantity: 7,
      itemFor: ["John", "Jane"],
      id: "2",
      addedBy: "John",
      boughtBy: "Jane",
    },
  ]);

  const addItem = (itemName: string, quantity: number, itemFor: string[]) => {
    setShoppingList([
      ...shoppingList,
      {
        itemName: itemName,
        quantity: quantity,
        itemFor,
        id: Math.random().toString(),
        addedBy: "John",
        boughtBy: null,
      },
    ]);
  };

  const removeItem = (id: string) => {};

  const updateItem = (newItem: ShoppingItem) => {};

  const [selectedItem, setSelectedItem] = useState<ShoppingItem | null>(null);

  const clearSelectedItem = () => {
    setSelectedItem(null);
  };

  return (
    <ShoppingListContext.Provider
      value={{
        shoppingList,
        addItem,
        removeItem,
        updateItem,
        selectedItem,
        setSelectedItem,
        clearSelectedItem,
      }}
    >
      <div className={styles.ShoppingListPage}>
        <ShoppingListPageHeader />
        <ShoppingList />
      </div>
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListPage;
