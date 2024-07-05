"use client";

import React, { useContext, useState } from "react";
import ShoppingListItem from "./ShoppingListItem/ShoppingListItem";
import styles from "./shopping-list.module.scss";
import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";

type Props = {};

const ShoppingList = (props: Props) => {
  const { shoppingList } = useContext(
    ShoppingListContext
  ) as ShoppingListContextType;

  const [selected, setSelected] = useState<string | null>("2");

  // Set the selected item to the id of the clicked item
  // And deselect it if it's already selected
  const handleClick = (id: string) => {
    if (selected === id) {
      setSelected(null);
      return;
    }

    setSelected(id);
  };

  return (
    <div className={styles.ShoppingList}>
      <div className={styles.ShoppingListHeader}>
        <div style={{ flexGrow: 1 }}>Name</div>
        <div>Quantity</div>
      </div>

      <div className={styles.ShoppingListBody}>
        {shoppingList.map((item) => (
          <ShoppingListItem
            key={item.id}
            shoppingItem={item}
            selected={selected}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
