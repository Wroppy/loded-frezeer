"use client";

import React from "react";
import styles from "./shopping-list-page.module.scss";
import ShoppingList from "../components/ShoppingList/ShoppingList";

type Props = {};

const ShoppingListPage = (props: Props) => {
  return (
    <div className={styles.ShoppingListPage}>
      <ShoppingList />
    </div>
  );
};

export default ShoppingListPage;
