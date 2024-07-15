"use client";

import React, { useState } from "react";
import styles from "./chore-page.module.scss";
import ClientChore from "../types/ClientChore";
import ChoreCycles from "../Enums/ChoreCycles";
import ChoreView from "../components/chore-view/ChoreView";
import AddChoreBox from "../components/add-chore-box/AddChoreBox";
import { useDisclosure } from "@mantine/hooks";
import ClientUser from "../types/ClientUser";
import { postFetch } from "../utils/postFetch";
import { showErrorMessage } from "../utils/showErrorMessage";

type Props = {
  email: string;
  chores: ClientChore[];
  users: ClientUser[];
};

const ChoresViewer = ({ chores: c, email, users }: Props) => {
  const [chores, setChores] = useState(c);
  const [toEditChore, setToEditChore] = useState<ClientChore | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  // Changes the state of a chore to completed
  const completeChore = (chore: ClientChore) => {};

  // Deletes a chore from the state
  const deleteChore = async (chore: ClientChore) => {
    // Send a request to the server to delete the chore

    const res = (await postFetch("/api/chores/delete-chore", {
      email,
      choreId: chore.id,
    })) as { error: string };

    // If there was an error, return
    if (res.error) {
      showErrorMessage("An error occured while deleting the chore", res.error);
      return;
    }
    
    setChores(chores.filter((c) => c.id !== chore.id));
  };

  const openModal = (chore: ClientChore) => {
    setToEditChore(chore);
    open();
  };

  return (
    <>
      <div className={styles.ChoresViewer}>
        {chores.map((chore) => (
          <ChoreView
            deleteChore={deleteChore}
            completeChore={completeChore}
            openModal={openModal}
            key={chore.id}
            chore={chore}
          />
        ))}
        <AddChoreBox />
      </div>
    </>
  );
};

export default ChoresViewer;
