"use client";

import React, { useState } from "react";
import styles from "./shopping-list-page.module.scss";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ShoppingListPageHeader from "../components/ShoppingListPageHeader/ShoppingListPageHeader";
import { ShoppingListContext } from "../context/ShoppingListContext";
import { ShoppingItem } from "../types/ShoppingItem";
import ShoppingItemDetailedView from "../components/ShoppingItemDetailedViewer/ShoppingItemDetailedView";
import { ShoppingListPageProps } from "../types/ShoppingListPageProps";
import { postFetch } from "../utils/postFetch";
import { showErrorMessage } from "../utils/showErrorMessage";
import { showSuccessMessage } from "../utils/showSucessMessage";

const ShoppingListPage = ({
  userName,
  names,
  shoppingList: list,
  email,
}: ShoppingListPageProps) => {
  const [shoppingList, setShoppingList] = useState(list);

  const addItem = async (
    itemName: string,
    quantity: number,
    itemFor: string[]
  ) => {
    // sends the item to the server
    const response = await postFetch("/api/shoppinglist/add-item", {
      itemName,
      quantity,
      itemFor,
      email,
    }) as { shoppingItem: ShoppingItem | null; error: string | null };

    if (response.error) {
      showErrorMessage("Error adding item to shopping list", response.error);
      return;
    }

    showSuccessMessage("Item successfully added to shopping list");

    // Updates the shopping list
    setShoppingList([...shoppingList, response.shoppingItem!]);
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
        name: userName!,
        email,
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
          <ShoppingListPageHeader names={names} />
          <ShoppingList />
        </div>
        <ShoppingItemDetailedView />
      </div>
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListPage;
