"use client";

import ChoreCycles, { getAllChoreCycles } from "@/app/Enums/ChoreCycles";
import ClientChore from "@/app/types/ClientChore";
import styles from "./manage-chore-component.module.scss";

import { Button, Card, Flex, InputLabel, LoadingOverlay, Text, TextInput } from "@mantine/core";
import React, { FormEvent, useState } from "react";
import ManageChoreComboBox from "./ManageChoreComboBox";
import ClientUser from "@/app/types/ClientUser";
import UserDND from "../users-drag-and-drop/UserDND";
import { useListState } from "@mantine/hooks";
import { showErrorMessage } from "@/app/utils/showErrorMessage";
import BareBonesChore from "@/app/types/BareBonesChore";
import Link from "next/link";

type Props = {
  chore?: ClientChore | null;
  users: ClientUser[];
  title: string;
  buttonText: string;
  onSubmit: (chore: BareBonesChore) => void;
  loading: boolean;
};

const ManageChoreComponent = ({
  onSubmit,
  title,
  buttonText,
  chore,
  users,
  loading,
}: Props) => {
  // States for the chore
  const [name, setName] = useState(chore ? chore.name : "");
  const [description, setDescription] = useState(
    chore ? chore.description : ""
  );

  const [cycle, setCycle] = useState(chore ? chore.expectedCycle : null);

  const [expectedUser, setExpectedUser] = useState(
    chore ? chore.expectedUser : ""
  );

  const [order, orderHandlers] = useListState(chore ? chore.order : users);

  const errorMessage = (message: string) => {
    console.log("error message", message);
    showErrorMessage("Error submiting form", message);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setName(name.trim());

    // Validates all the data for the chore
    if (name.length === 0) {
      errorMessage("Please enter a valid name");
      return;
    }

    if (!description) {
      errorMessage("Please enter a valid description");
      return;
    }

    if (!cycle) {
      errorMessage("Please select a valid cycle");
      return;
    }

    if (!expectedUser) {
      errorMessage("Please select a valid expected user");
      return;
    }

    if (order.length === 0) {
      errorMessage("Please select a valid order");
      return;
    }

    const chore: BareBonesChore = {
      name,
      description,
      expectedCycle: cycle,
      expectedUser,
      order,
    };

    onSubmit(chore);
  };

  return (
      <Card shadow="lg" className={styles.ManageChoreComponent}>
    <LoadingOverlay visible={loading} />

        <form onSubmit={handleSubmit}>
          <Flex direction={"column"} gap="lg">
            <Text>{title}</Text>
            <TextInput
              label="Name"
              placeholder="Enter chore name"
              required
              value={name}
              onChange={(event) => setName(event.currentTarget.value)}
            />

            <TextInput
              label="Description"
              placeholder="Enter chore description"
              required
              value={description}
              onChange={(event) => setDescription(event.currentTarget.value)}
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
                value={expectedUser}
                setValue={setExpectedUser}
              />
            </Flex>
            <Flex direction={"column"}>
              <InputLabel required>Select chore order:</InputLabel>
              <UserDND state={order} handlers={orderHandlers} />
            </Flex>
            <Flex justify={"flex-end"} gap={16}>
              <Button
                color="red"
                variant="outline"
                component={Link}
                href="/chores"
              >
                Cancel
              </Button>
              <Button type="submit">{buttonText}</Button>
            </Flex>
          </Flex>
        </form>
      </Card>
  );
};

export default ManageChoreComponent;
