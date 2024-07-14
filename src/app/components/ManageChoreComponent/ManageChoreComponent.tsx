"use client";

import ChoreCycles, { getAllChoreCycles } from "@/app/Enums/ChoreCycles";
import Chore from "@/app/types/ClientChore";
import styles from "./manage-chore-component.module.scss";

import { Card, Flex, InputLabel, TextInput } from "@mantine/core";
import React, { useState } from "react";
import ManageChoreComboBox from "./ManageChoreComboBox";
import User from "@/app/types/ClientUser";

type Props = {
  chore?: Chore | null;
  users: User[];
};

const ManageChoreComponent = ({ chore, users }: Props) => {
  // States for the chore
  const [newName, setNewName] = useState(chore?.name);
  const [newDescription, setNewDescription] = useState(chore?.description);

  const [cycle, setCycle] = useState(chore?.expectedCycle);

  const [newExpectedUser, setNewExpectedUser] = useState(chore?.expectedUser);

  const [order, setOrder] = useState();

  return (
    <Card shadow="lg" className={styles.ManageChoreComponent}>
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
          <ManageChoreComboBox
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
          <ManageChoreComboBox
            placeholderText="Select Current Chore Doer"
            values={users.map((user) => user.email)}
            labels={users.map((user) => user.name)}
            value={newExpectedUser}
            setValue={setNewExpectedUser}
          />
        </Flex>
      </Flex>
    </Card>
  );
};

export default ManageChoreComponent;
