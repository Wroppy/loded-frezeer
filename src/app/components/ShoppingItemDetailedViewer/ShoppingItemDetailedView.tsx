import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";
import React, { useContext } from "react";
import styles from "./shopping-item-detailed-view.module.scss";
import { ActionIcon, Card, Flex, Paper } from "@mantine/core";
import { IconShoppingCart, IconX } from "@tabler/icons-react";

type Props = {};

const ShoppingItemDetailedView = (props: Props) => {
  const { selectedItem, setSelectedItem, name } = useContext(
    ShoppingListContext
  ) as ShoppingListContextType;

  return (
    <>
      {selectedItem && (
        <div className={styles.ShoppingItemDetailedView}>
          {/* Exit button  */}
          <Flex justify="end" style={{ width: "100%" }}>
            <ActionIcon variant="outline" onClick={() => setSelectedItem(null)}>
              <IconX style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
          </Flex>
          <Card className={styles.ShoppingItemDetailedCard}>
            <div className={styles.SelectedItemHeading}>
              <ActionIcon variant="outline">
                <IconShoppingCart
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              {selectedItem.itemName}
            </div>
            <div>Quantity: {selectedItem.quantity}</div>
          </Card>
          <Card className={styles.ShoppingItemDetailedCard}>
            Added by: {name == selectedItem.addedBy ? "You" : selectedItem.addedBy}
          </Card>
          <Card className={styles.ShoppingItemDetailedCard}>
            Item for: {selectedItem.itemFor.join(", ")}
          </Card>
          <Card className={styles.ShoppingItemDetailedCard}>
            {selectedItem.boughtBy ? (`Bought by: ${selectedItem.boughtBy}`) : "Not bought yet"}
          </Card>
        </div>
      )}
    </>
  );
};

export default ShoppingItemDetailedView;
