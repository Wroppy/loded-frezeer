import { ActionIcon, Flex, Tooltip } from "@mantine/core";
import React, { useContext, useState } from "react";
import styles from "./../shopping-item-detailed-view.module.scss";
import { IconEdit, IconShoppingCart, IconTrash } from "@tabler/icons-react";
import { postFetch } from "@/app/utils/postFetch";
import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";
import { showErrorMessage } from "@/app/utils/showErrorMessage";
import { showSuccessMessage } from "@/app/utils/showSucessMessage";
import { useDisclosure } from "@mantine/hooks";
import EditShoppingItemModal from "../../edit-shopping-item-modal/EditShoppingItemModal";

type Props = {};

const ShoppingItemDetailedViewFooter = (props: Props) => {
  const { name, email, selectedItem, updateItem, removeItem } = useContext(
    ShoppingListContext
  ) as ShoppingListContextType;

  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

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
    updateItem({ ...selectedItem!, boughtBy: name });
  };

  const deleteItem = async () => {
    setLoading(true);

    const res = await postFetch("/api/shoppinglist/delete-item", {
      email,
      id: selectedItem!.id,
    });

    if (res.error) {
      showErrorMessage("An error occured while deleting the item", res.error);
      return;
    }

    showSuccessMessage("Item successfully deleted");
    removeItem(selectedItem!.id);
    setLoading(false);
  };

  // Opens the edit modal
  const handleEdit = () => {
    open();
  };

  const buttons = [
    { tip: "Buy", icon: IconShoppingCart, onClick: handleBuy },
    { tip: "Edit", icon: IconEdit, onClick: handleEdit },
    { tip: "Delete", icon: IconTrash, onClick: deleteItem },
  ];

  return (
    <div className={styles.ShoppingItemDetailedViewFooter}>
      <EditShoppingItemModal opened={opened} close={close} />
      {buttons.map((button, index) => {
        const Icon = button.icon;
        return (
          <Tooltip label={button.tip} key={index}>
            <ActionIcon
              variant="outline"
              onClick={button.onClick}
              disabled={loading}
            >
              <Icon style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default ShoppingItemDetailedViewFooter;
