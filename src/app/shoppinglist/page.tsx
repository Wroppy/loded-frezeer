"use client";

import React from "react";
import styles from "./shopping-list-page.module.scss";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ShoppingListPageHeader from "../components/ShoppingListPageHeader/ShoppingListPageHeader";

type Props = {};

const ShoppingListPage = (props: Props) => {
  return (
    <div className={styles.ShoppingListPage}>
      <ShoppingListPageHeader />
      <ShoppingList />
    </div>
  );
};

export default ShoppingListPage;
