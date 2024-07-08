"use client";

import {
  Button,
  MultiSelect,
  NumberInput,
  TextInput,
  rem,
} from "@mantine/core";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import styles from "./../ShoppingList/shopping-list.module.scss";
import { IconDumpling, IconHash } from "@tabler/icons-react";
import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";
import { showErrorMessage } from "@/app/utils/showErrorMessage";

type Props = {names: string[]};

const ShoppingListHeader = ({names}: Props) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState<string | number>(1);
  const [itemFor, setItemFor] = useState<string[]>([]);

  const { addItem, shoppingList } = useContext(
    ShoppingListContext
  ) as ShoppingListContextType;

  const showShoppingListError = (message: string) => {
    showErrorMessage("Error creating a new shopping list item", message);
  };

  // Add item to the shopping list
  const handleAddItem = (event: FormEvent) => {
    event.preventDefault();

    if (itemName.trim() === "") {
      setItemName("");
      showShoppingListError("Please input an item name");
      return;
    }

    let itemQuantity = parseInt(quantity.toString());

    // Validate the quantity
    if (isNaN(itemQuantity)) {
      setQuantity(1);
      showShoppingListError("Please input a valid quantity");
      return;
    }

    // Validates the item for
    if (itemFor.length === 0) {
      showShoppingListError("Please select a user");
      return;
    }

    addItem(itemName, itemQuantity, itemFor);

    setItemName("");
    setQuantity(1);
    setItemFor([]);
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
      <MultiSelect
        data={names}
        value={itemFor}
        clearable
        onChange={setItemFor}
        placeholder="For?"
        style={{ width: "300px" }}
      />
      <NumberInput
        value={quantity}
        onChange={setQuantity}
        leftSection={<IconHash style={{ width: rem(16), height: rem(16) }} />}
        placeholder="Quantity"
        min={1}
        max={20}
        style={{ width: "120px" }}
      />
      <Button type="submit" variant="light">
        Add
      </Button>
    </form>
  );
};

export default ShoppingListHeader;
