import { ActionIcon, Flex, Tooltip } from "@mantine/core";
import React, { useContext, useState } from "react";
import styles from "./../shopping-item-detailed-view.module.scss";
import { IconEdit, IconShoppingCart, IconTrash } from "@tabler/icons-react";
import { postFetch } from "@/app/utils/postFetch";
import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";
import { showErrorMessage } from "@/app/utils/showErrorMessage";
import { showSuccessMessage } from "@/app/utils/showSucessMessage";

type Props = {};

const ShoppingItemDetailedViewFooter = (props: Props) => {
  const { email, selectedItem } = useContext(
    ShoppingListContext
  ) as ShoppingListContextType;

  const [loading, setLoading] = useState(false);

  // Updates the item to be bought in the shopping list
  const handleBuy = async () => {
    setLoading(true);

    // Sends the item to the server
    const res = await postFetch("/api/shoppinglist/set-purchased", {
      email,
      checkedItems: [selectedItem!.id],
    });

    if (res.error) {
      showErrorMessage("An error occured while purchasing items", res.error);
      return;
    }

    showSuccessMessage("Items successfully purchased");
    setLoading(false);
  };

  const buttons = [
    { tip: "Buy", icon: IconShoppingCart, onClick: handleBuy },
    { tip: "Edit", icon: IconEdit, onClick: () => console.log("Edit") },
    { tip: "Delete", icon: IconTrash, onClick: () => console.log("Delete") },
  ];

  return (
    <div className={styles.ShoppingItemDetailedViewFooter}>
      {buttons.map((button, index) => {
        const Icon = button.icon;
        return (
          <Tooltip label={button.tip} key={index}>
            <ActionIcon variant="outline" onClick={button.onClick} disabled={loading}>
              <Icon style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default ShoppingItemDetailedViewFooter;
