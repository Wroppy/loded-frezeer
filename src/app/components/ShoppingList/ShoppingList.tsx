"use client";

import React, { useContext, useState } from "react";
import ShoppingListItem from "./ShoppingListItem/ShoppingListItem";
import styles from "./shopping-list.module.scss";
import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";
import { ShoppingItem } from "@/app/types/ShoppingItem";
import { Button } from "@mantine/core";

type Props = {};

const ShoppingList = (props: Props) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const {
    shoppingList,
    selectedItem: selected,
    setSelectedItem: setSelected,
  } = useContext(ShoppingListContext) as ShoppingListContextType;

  // Set the selected item to the id of the clicked item
  // And deselect it if it's already selected
  const handleClick = (shoppingItem: ShoppingItem) => {
    if (selected && selected.id === shoppingItem.id) {
      setSelected(null);
      return;
    }

    setSelected(shoppingItem);
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
            checkedItems={checkedItems}
            key={item.id}
            shoppingItem={item}
            selected={selected}
            handleClick={handleClick}
            setCheckedItems={setCheckedItems}
          />
        ))}
      </div>
      <div className={styles.ShoppingListFooter}>
        <Button disabled={checkedItems.length == 0}>
          Set Purchased
        </Button>
      </div>
    </div>
  );
};

export default ShoppingList;
