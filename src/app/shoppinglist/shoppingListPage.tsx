"use client";

import React, { useState } from "react";
import styles from "./shopping-list-page.module.scss";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ShoppingListPageHeader from "../components/ShoppingListPageHeader/ShoppingListPageHeader";
import { ShoppingListContext } from "../context/ShoppingListContext";
import { ShoppingItem } from "../types/ShoppingItem";
import ShoppingItemDetailedView from "../components/ShoppingItemDetailedViewer/ShoppingItemDetailedView";
import { ShoppingListPageProps } from "../types/ShoppingListPageProps";


const ShoppingListPage = ({names, shoppingList: list}: ShoppingListPageProps) => {
  const [shoppingList, setShoppingList] = useState(list);

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
        <div className={styles.ShoppingListContainer}>
          <ShoppingListPageHeader names={names}/>
          <ShoppingList />
        </div>
        <ShoppingItemDetailedView />
      </div>
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListPage;
