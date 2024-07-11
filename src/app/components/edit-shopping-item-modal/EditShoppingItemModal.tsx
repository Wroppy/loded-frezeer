import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";
import { Button, Flex, LoadingOverlay, Modal, MultiSelect, NumberInput, rem, TextInput } from "@mantine/core";
import { IconHash } from "@tabler/icons-react";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import { copyObject } from "@/app/database/Utils";
import { showErrorMessage } from "@/app/utils/showErrorMessage";
import { postFetch } from "@/app/utils/postFetch";

type Props = {
  opened: boolean;
  close: () => void;
};

const EditShoppingItemModal = ({ opened, close }: Props) => {
  const { selectedItem, tenantNames, updateItem, email } = useContext(
    ShoppingListContext
  ) as ShoppingListContextType;

  const [newItemName, setNewItemName] = useState(selectedItem!.itemName);
  const [newItemFor, setNewItemFor] = useState(selectedItem!.itemFor);
  const [newQuantity, setNewQuantity] = useState<string | number>(selectedItem!.quantity);
  const [loading, setLoading] = useState(false);

  // Updates the states when the selected item changes
  useEffect(() => {
    setNewItemName(selectedItem!.itemName);
    setNewItemFor(selectedItem!.itemFor);
    setNewQuantity(selectedItem!.quantity);
  }, [selectedItem]);

  const handleEdit = async (event: FormEvent) => {
    event.preventDefault();

    // Validates the item name
    if (newItemName.trim() === "") {
      showErrorMessage("Error editing shopping item", "Item name cannot be empty");
      setNewItemName("");
      return;
    }

    // Validates the quantity
    let itemQuantity = parseInt(newQuantity.toString());
    
    if (isNaN(itemQuantity) || itemQuantity < 1 || itemQuantity > 20) {
      showErrorMessage("Error editing shopping item", "Quantity must be between 1 and 20");
      setNewQuantity(1);
      return;
    }

    // Validates the item for
    if (newItemFor.length === 0) {
      showErrorMessage("Error editing shopping item", "Item for cannot be empty");
      return;
    }

    // TODO: Update and edit the item in the shopping list
    let updatedItem = copyObject(selectedItem!);
    updatedItem.itemName = newItemName;
    updatedItem.itemFor = newItemFor;
    updatedItem.quantity = itemQuantity;

    setLoading(true);

    // Send the updated item to the server
    const res = await postFetch("/api/shoppinglist/edit-item", {
      email,
      id: updatedItem.id,
      newItemName,
      newItemQuantity: itemQuantity,
      newItemFor,
    });

    setLoading(false);

    // Check for errors
    if (res.error) {
      showErrorMessage("Error editing shopping item", res.error);
      return;
    }

    // Update the item in the context
    updateItem(updatedItem);
    close();


  }

  return (
    <>
      <LoadingOverlay visible={loading} />
      <Modal opened={opened} onClose={close} title="Edit Shopping Item">
        <form onSubmit={handleEdit}>
          <Flex direction={"column"} gap="lg">
            <TextInput
              label="Item Name"
              placeholder="Item Name"
              value={newItemName}
              onChange={(event) => setNewItemName(event.currentTarget.value)}
              required
            />
            <MultiSelect
              label="Item For"
              placeholder="For?"
              data={tenantNames}
              value={newItemFor}
              onChange={(value) => setNewItemFor(value)}
              required
            />
            <NumberInput
              label="Quantity"
              value={newQuantity}
              onChange={(value) => setNewQuantity(value)}
              required
              min={1}
              max={20}
              leftSection={<IconHash style={{ width: rem(20), height: rem(20) }} stroke={1.5} />}
            />
            <Flex justify={"flex-end"}>
              <Button type="submit" color="blue" variant="outline">
                Save
              </Button>
            </Flex>
          </Flex>
        </form>
      </Modal>
    </>
  );
};

export default EditShoppingItemModal;
