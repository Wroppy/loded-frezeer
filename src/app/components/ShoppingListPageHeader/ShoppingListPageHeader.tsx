"use client";

import { Button, NumberInput, TextInput, rem } from "@mantine/core";
import React from "react";
import styles from "./../ShoppingList/shopping-list.module.scss";
import { IconDumpling, IconHash } from "@tabler/icons-react";

type Props = {};

const ShoppingListHeader = (props: Props) => {
  return (
    <form className={styles.ShoppingListPageHeader}>
      <TextInput
        style={{ flexGrow: 1 }}
        leftSection={<IconDumpling style={{ width: rem(16), height: rem(16) }} />}
        placeholder="Add an item"
      />
      <NumberInput
        leftSection={<IconHash style={{ width: rem(16), height: rem(16) }} />}
        placeholder="Quantity"
        min={1}
        max={20}
      />
      <Button variant="light">Add</Button>
    </form>
  );
};

export default ShoppingListHeader;
