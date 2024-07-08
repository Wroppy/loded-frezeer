import { ShoppingItem } from "@/app/types/ShoppingItem";
import React, { ChangeEvent } from "react";
import styles from "./shopping-list-item.module.scss";
import { Card, Checkbox, Table } from "@mantine/core";

type Props = {
  shoppingItem: ShoppingItem;
  selected: ShoppingItem | null;
  handleClick: (id: ShoppingItem) => void;
  checkedItems: string[];
  setCheckedItems: (items: string[]) => void
};

const ShoppingListItem = ({ shoppingItem, selected, handleClick, checkedItems, setCheckedItems }: Props) => {
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // If the item is already checked, removes it from the checked items
    if (checkedItems.includes(shoppingItem.id)) {
      setCheckedItems(checkedItems.filter((id) => id !== shoppingItem.id));
      return;
    }

    // Adds the item to the checked items
    setCheckedItems([...checkedItems, shoppingItem.id]);
  };
  
  return (
    // Is selected if the selected prop matches the id of the shopping item
    <Card
      className={`${styles.ShoppingListItem} ${
        selected &&
        selected.id === shoppingItem.id &&
        styles.ShoppingListItemSelected
      }`}
      onClick={() => handleClick(shoppingItem)}
    >
      <div className={styles.CheckBoxContainer}>
        <Checkbox
          onClick={(event) => event.stopPropagation()} // Prevent the click event from bubbling up to the parent
          type="checkbox"
          checked={checkedItems.includes(shoppingItem.id)}
          onChange={onChange}
        />
      </div>
      <div className={styles.ShoppingListItemName}>{shoppingItem.itemName}</div>
      <div>{shoppingItem.quantity}</div>
    </Card>
  );
};

export default ShoppingListItem;
