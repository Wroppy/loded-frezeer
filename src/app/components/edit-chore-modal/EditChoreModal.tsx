import Chore from "@/app/types/ClientChore";
import { Flex, Modal, TextInput } from "@mantine/core";
import React, { useState } from "react";

type Props = {
  chore: Chore | null;
  opened: boolean;
  onClose: () => void;
};

const EditChoreModal = ({ chore, opened, onClose }: Props) => {
  const [newChoreName, setNewChoreName] = useState(chore?.name);

  return (
    <>
      {chore && (
        <Modal title="Edit Chore" opened={opened} onClose={onClose}>
          <Flex></Flex>
        </Modal>
      )}
    </>
  );
};

export default EditChoreModal;
