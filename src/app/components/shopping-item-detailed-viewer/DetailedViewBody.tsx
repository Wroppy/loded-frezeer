import { Card } from "@mantine/core";
import styles from "./shopping-item-detailed-view.module.scss";
import React, { useContext } from "react";
import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";

type Props = {};

const DetailedViewBody = (props: Props) => {
  const { selectedItem, name } = useContext(
    ShoppingListContext
  ) as ShoppingListContextType;

  return (
    <>
      {selectedItem && (
        <div className={styles.ShoppingItemDetailedBody}>
          <Card className={styles.ShoppingItemDetailedCard}>
            <div className={styles.SelectedItemHeading}>
              {selectedItem.itemName}
            </div>
            <div>Quantity: {selectedItem.quantity}</div>
          </Card>
          <Card className={styles.ShoppingItemDetailedCard}>
            Added by:{" "}
            {name == selectedItem.addedBy ? "You" : selectedItem.addedBy}
          </Card>
          <Card className={styles.ShoppingItemDetailedCard}>
            Item for: {selectedItem.itemFor.join(", ")}
          </Card>
          <Card className={styles.ShoppingItemDetailedCard}>
            {selectedItem.boughtBy
              ? `Bought by: ${
                  selectedItem.boughtBy == name ? "You" : selectedItem.boughtBy
                }`
              : "Not bought yet"}
          </Card>
        </div>
      )}
    </>
  );
};

export default DetailedViewBody;
