import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";
import React, { useContext } from "react";
import styles from "./shopping-item-detailed-view.module.scss";

type Props = {};

const ShoppingItemDetailedView = (props: Props) => {
  const { selectedItem } = useContext(
    ShoppingListContext
  ) as ShoppingListContextType;

  return (
    <>
      {selectedItem && (
        <div className={styles.ShoppingItemDetailedView}>
          <h2>{selectedItem.itemName}</h2>
          <p>Quantity: {selectedItem.quantity}</p>
          <p>Added by: {selectedItem.addedBy}</p>
          <p>Bought by: {selectedItem.boughtBy}</p>
        </div>
      )}
    </>
  );
};

export default ShoppingItemDetailedView;
