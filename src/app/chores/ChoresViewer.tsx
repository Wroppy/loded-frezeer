"use client";

import React, { useState } from "react";
import styles from "./chore-page.module.scss";
import ClientChore from "../types/ClientChore";
import ChoreCycles from "../Enums/ChoreCycles";
import ChoreView from "../components/chore-view/ChoreView";
import AddChoreBox from "../components/add-chore-box/AddChoreBox";
import { useDisclosure } from "@mantine/hooks";
import ClientUser from "../types/ClientUser";

type Props = {
  email: string;
  chores: ClientChore[];
  users: ClientUser[];
};

const ChoresViewer = ({ chores: c, email, users }: Props) => {
  const [chores, setChores] = useState(c);
  const [toEditChore, setToEditChore] = useState<ClientChore | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

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
