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
import { set } from "mongoose";

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
    const response = (await postFetch("/api/shoppinglist/add-item", {
      itemName,
      quantity,
      itemFor,
      email,
    })) as { shoppingItem: ShoppingItem | null; error: string | null };

    if (response.error) {
      showErrorMessage("Error adding item to shopping list", response.error);
      return;
    }

    showSuccessMessage("Item successfully added to shopping list");

    // Updates the shopping list
    setShoppingList([...shoppingList, response.shoppingItem!]);
  };

  const removeItem = (id: string) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);

    setSelectedItem(null);
  };

  // Loops through the shopping list and updates the item with the new item
  const updateItem = (newItem: ShoppingItem) => {
    let newShoppingList = shoppingList.map((item) => {
      if (item.id === newItem.id) {
        // console.log(newItem);
        return newItem;
      }

      return item;
    });

    // console.log(newShoppingList);

    setShoppingList(newShoppingList);

    // If the selected item is the one being updated, update it
    if (selectedItem && selectedItem.id === newItem.id) {
      setSelectedItem(newItem);
    }
  };

  // Updates the shopping list with the new items
  const updateItems = (newItems: ShoppingItem[]) => {
    const newShoppingList = shoppingList.map((item) => {
      const newItem = newItems.find((newItem) => newItem.id === item.id);

      if (newItem) {
        return newItem;
      }

      return item;
    });

    setShoppingList(newShoppingList);

    // If the selected item is the one being updated, update it
    if (selectedItem) {
      const newItem = newItems.find((item) => item.id === selectedItem.id);
      if (newItem) {
        setSelectedItem(newItem);
      }
    }
  };

  const [selectedItem, setSelectedItem] = useState<ShoppingItem | null>(null);

  const clearSelectedItem = () => {
    setSelectedItem(null);
  };

  React.useEffect(() => {
    console.log(shoppingList);
  }, [shoppingList]);

  return (
    <ShoppingListContext.Provider
      value={{
        updateItems,
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
