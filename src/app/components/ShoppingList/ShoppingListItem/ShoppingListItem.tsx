import { ShoppingItem } from "@/app/types/ShoppingItem";
import React from "react";
import styles from "./shopping-list-item.module.scss";
import { Card, Checkbox, Table } from "@mantine/core";

type Props = {
  shoppingItem: ShoppingItem;
  selected: string | null;
  handleClick: (id: string) => void;
};

const ShoppingListItem = ({ shoppingItem, selected, handleClick }: Props) => {
  return (
    // Is selected if the selected prop matches the id of the shopping item
    <Card
      className={`${styles.ShoppingListItem} ${
        selected === shoppingItem.id && styles.ShoppingListItemSelected
      }`}
      onClick={() => handleClick(shoppingItem.id)}
    >
      <div className={styles.CheckBoxContainer}>
        <Checkbox
          onClick={(event) => event.stopPropagation()} // Prevent the click event from bubbling up to the parent
          type="checkbox"
        />
      </div>
      <div className={styles.ShoppingListItemName}>{shoppingItem.itemName}</div>
      <div>{shoppingItem.quantity}</div>
    </Card>
  );
};

export default ShoppingListItem;
