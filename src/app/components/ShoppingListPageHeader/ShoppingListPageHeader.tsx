"use client";

import { Button, NumberInput, TextInput, rem } from "@mantine/core";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import styles from "./../ShoppingList/shopping-list.module.scss";
import { IconDumpling, IconHash } from "@tabler/icons-react";
import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";

type Props = {};

const ShoppingListHeader = (props: Props) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState<string | number>(1);

  const { addItem, shoppingList } = useContext(
    ShoppingListContext
  ) as ShoppingListContextType;

  // Add item to the shopping list
  const handleAddItem = (event: FormEvent) => {
    event.preventDefault();
    console.log("Handl;ing")

    if (itemName.trim() === "") {
      setItemName("");
      return;
    }

    let itemQuantity = parseInt(quantity.toString());

    addItem(itemName, itemQuantity, []);

    setItemName("");
    setQuantity(1);
  };

  return (
    <form onSubmit={handleAddItem} className={styles.ShoppingListPageHeader}>
      <TextInput
        style={{ flexGrow: 1 }}
        leftSection={
          <IconDumpling style={{ width: rem(16), height: rem(16) }} />
        }
        value={itemName}
        onChange={(event: ChangeEvent) =>
          setItemName((event.target as HTMLInputElement).value)
        }
        placeholder="Add an item"
      />
      <NumberInput
        value={quantity}
        onChange={setQuantity}
        leftSection={<IconHash style={{ width: rem(16), height: rem(16) }} />}
        placeholder="Quantity"
        min={1}
        max={20}
      />
      <Button type="submit" variant="light">Add</Button>
    </form>
  );
};

export default ShoppingListHeader;
