import ChoreCycles, { getAllChoreCycles } from "@/app/Enums/ChoreCycles";
import Chore from "@/app/types/ClientChore";
import {
  Combobox,
  ComboboxChevron,
  ComboboxDropdown,
  ComboboxOption,
  ComboboxOptions,
  ComboboxTarget,
  Flex,
  InputBase,
  InputLabel,
  InputPlaceholder,
  Modal,
  TextInput,
  useCombobox,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import EditCoreComboBox from "./EditCoreComboBox";
import User from "@/app/types/ClientUser";

type Props = {
  chore: Chore | null;
  opened: boolean;
  onClose: () => void;
  users: User[];
};

const EditChoreModal = ({ chore, opened, onClose, users }: Props) => {
  // States for the chore
  const [newName, setNewName] = useState(chore?.name);
  const [newDescription, setNewDescription] = useState(chore?.description);

  const [cycle, setCycle] = useState(chore?.expectedCycle);

  const [newExpectedUser, setNewExpectedUser] = useState(chore?.expectedUser);

  const [order, setOrder] = useState();

  // Changes the state of a chore to completed when changed
  useEffect(() => {
    setNewName(chore?.name);
    setNewDescription(chore?.description);
    setCycle(chore?.expectedCycle);
    setNewExpectedUser(chore?.expectedUser);
  }, [chore]);

  return (
    <>
      {chore && (
        <Modal title="Edit Chore" opened={opened} onClose={onClose}>
          <Flex direction={"column"} gap="lg">
            <TextInput
              label="Name"
              placeholder="Enter chore name"
              required
              value={newName}
              onChange={(event) => setNewName(event.currentTarget.value)}
            />

            <TextInput
              label="Description"
              placeholder="Enter chore description"
              required
              value={newDescription}
              onChange={(event) => setNewDescription(event.currentTarget.value)}
            />
            {/* Expected cycle combo box */}
            <Flex direction={"column"}>
              <InputLabel required style={{ width: "100%" }}>
                Expected cycle
              </InputLabel>
              <EditCoreComboBox
                values={getAllChoreCycles()}
                labels={getAllChoreCycles()}
                setValue={setCycle}
                value={cycle}
                placeholderText="Select Expected Cycle"
              />
            </Flex>
            <Flex direction={"column"}>
              <InputLabel required style={{ width: "100%" }}>
                Expected user
              </InputLabel>
              <EditCoreComboBox
                placeholderText="Select Current Chore Doer"
                values={users.map((user) => user.email)}
                labels={users.map((user) => user.name)}
                value={newExpectedUser}
                setValue={setNewExpectedUser}
              />
            </Flex>
          </Flex>
        </Modal>
      )}
    </>
  );
};

export default EditChoreModal;
