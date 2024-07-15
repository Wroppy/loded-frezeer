"use client";

import React, { useState } from "react";
import styles from "./chore-page.module.scss";
import ClientChore from "../types/ClientChore";
import ChoreView from "../components/chore-view/ChoreView";
import AddChoreBox from "../components/add-chore-box/AddChoreBox";
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
  const [loading, setLoading] = useState(false);

  // Changes the state of a chore to completed
  const completeChore = async (chore: ClientChore) => {
    setLoading(true);
    // Sends a request to the server to complete the chore
    const res = await postFetch("/api/chores/complete-chore", {
      email,
      choreId: chore.id,
    });

    // If there was an error, return
    if (res.error) {
      showErrorMessage(
        "An error occured while completing the chore",
        res.error
      );
      setLoading(false);
      return;
    }

    const { lastCompleted, previousUser, expectedUser, nextExpectedUser } = res;

    // Updates the state of the chore
    setChores(
      chores.map((c) => {
        if (c.id === chore.id) {
          return {
            ...c,
            lastCompleted: new Date(lastCompleted),
            previousUser,
            expectedUser,
            nextExpectedUser,
          };
        }
        return c;
      })
    );

    setLoading(false);
  };

  // Deletes a chore from the state
  const deleteChore = async (chore: ClientChore) => {
    // Send a request to the server to delete the chore
    setLoading(true);
    const res = (await postFetch("/api/chores/delete-chore", {
      email,
      choreId: chore.id,
    })) as { error: string };

    // If there was an error, return
    if (res.error) {
      showErrorMessage("An error occured while deleting the chore", res.error);
      setLoading(false);
      return;
    }

    setChores(chores.filter((c) => c.id !== chore.id));
    setLoading(false);
  };

  return (
    <>
      <div className={styles.ChoresViewer}>
        {chores.map((chore) => (
          <ChoreView
            deleteChore={deleteChore}
            completeChore={completeChore}
            key={chore.id}
            chore={chore}
            loading={loading}
          />
        ))}
        <AddChoreBox />
      </div>
    </>
  );
};

export default ChoresViewer;
