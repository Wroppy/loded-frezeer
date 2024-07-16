"use client";

import React, { useEffect, useState } from "react";
import styles from "./shopping-list-page.module.scss";
import ShoppingList from "../components/shopping-list/ShoppingList";
import ShoppingListPageHeader from "../components/shopping-list-page-header/ShoppingListPageHeader";
import { ShoppingListContext } from "../context/ShoppingListContext";
import { ShoppingItem } from "../types/ShoppingItem";
import ShoppingItemDetailedView from "../components/shopping-item-detailed-viewer/ShoppingItemDetailedView";
import { ShoppingListPageProps } from "../types/ShoppingListPageProps";
import { postFetch } from "../utils/postFetch";
import { showErrorMessage } from "../utils/showErrorMessage";
import { showSuccessMessage } from "../utils/showSucessMessage";
import { useDisclosure } from "@mantine/hooks";

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
    if (selectedItemPriv && selectedItemPriv.id === newItem.id) {
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
    if (selectedItemPriv) {
      const newItem = newItems.find((item) => item.id === selectedItemPriv.id);
      if (newItem) {
        setSelectedItem(newItem);
      }
    }
  };

  const [selectedItemPriv, setSelectedItemPriv] = useState<ShoppingItem | null>(
    null
  );
  const [opened, { open, close }] = useDisclosure(false);

  const setSelectedItem = (item: ShoppingItem | null) => {
    setSelectedItemPriv(item);
    if (item) {
      open();
    } else {
      close();
    }
  };

  const clearSelectedItem = () => {
    setSelectedItem(null);
  };

  const openDrawer = () => {
    open();
  };

  const closeDrawer = () => {
    close();
    clearSelectedItem();
  };

  useEffect(() => {
    console.log(selectedItemPriv);
    
  }, [selectedItemPriv]);

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
        selectedItem: selectedItemPriv,
        setSelectedItem,
        clearSelectedItem,
        tenantNames: names,
        drawerOpened: opened,
        openDrawer,
        closeDrawer,
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
