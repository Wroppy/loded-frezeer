"use client";

import React, { useState } from "react";
import styles from "./chore-page.module.scss";
import ClientChore from "../types/ClientChore";
import ChoreCycles from "../Enums/ChoreCycles";
import ChoreView from "../components/chore-view/ChoreView";
import AddChoreBox from "../components/add-chore-box/AddChoreBox";
import { useDisclosure } from "@mantine/hooks";

const CHORES: ClientChore[] = [
  {
    name: "Clean the house",
    description: "Vacuum and mop the floors",
    expectedCycle: ChoreCycles.Weekly,
    lastCompleted: new Date(2021, 8, 1),
    expectedUser: "John Doe",
    nextExpectedUser: "Jane Doe",
    id: "1",
    previousUser: "Jack Doe",
    order: [
      { name: "Jane Joe", email: "jane@email.com" },
      { name: "Jake Doe", email: "jake@email.com" },
      { name: "John Doe", email: "john@email.com" },
    ],
  },
  {
    name: "Trash",
    description: "Take out the trash",
    expectedCycle: ChoreCycles.Daily,
    lastCompleted: new Date(2021, 8, 1),
    expectedUser: "John Doe",
    nextExpectedUser: "Jane Doe",
    id: "2",
    order: [
      { name: "John Doe", email: "john@email.com" },
      { name: "Jane Joe", email: "jane@email.com" },
      { name: "Jake Doe", email: "jake@email.com" },
    ],
  },
];

type Props = {};

const ChoresViewer = (props: Props) => {
  const [chores, setChores] = useState(CHORES);
  const [toEditChore, setToEditChore] = useState<ClientChore | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const users = [
    { name: "John Doe", email: "john@email.com" },
    { name: "Jane Joe", email: "jane@email.com" },
    { name: "Jake Doe", email: "jake@email.com" },
  ];
  // Adds a new chore to the state
  const addCore = (chore: ClientChore) => {};

  // Changes the state of a chore to completed
  const completeChore = (chore: ClientChore) => {};

  // Deletes a chore from the state
  const deleteChore = (chore: ClientChore) => {};

  const updateChore = (chore: ClientChore) => {};

  const openModal = (chore: ClientChore) => {
    setToEditChore(chore);
    open();
  };

  return (
    <>
      <div className={styles.ChoresViewer}>
        {chores.map((chore) => (
          <ChoreView openModal={openModal} key={chore.id} chore={chore} />
        ))}
        <AddChoreBox />
      </div>
    </>
  );
};

export default ChoresViewer;
