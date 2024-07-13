"use client";

import React, { useState } from "react";
import styles from "./chore-page.module.scss";
import Chore from "../types/ClientChore";
import ChoreCycles from "../Enums/ChoreCycles";
import ChoreView from "../components/chore-view/ChoreView";
import AddChoreBox from "../components/add-chore-box/AddChoreBox";

const CHORES: Chore[] = [
  {
    name: "Clean the house",
    description: "Vacuum and mop the floors",
    expectedCycle: ChoreCycles.Weekly,
    lastCompleted: new Date(2021, 8, 1),
    expectedUser: "John Doe",
    nextExpectedUser: "Jane Doe",
    id: "1",
    previousUser: "Jack Doe",
  },
  {
    name: "Trash",
    description: "Take out the trash",
    expectedCycle: ChoreCycles.Daily,
    lastCompleted: new Date(2021, 8, 1),
    expectedUser: "John Doe",
    nextExpectedUser: "Jane Doe",
    id: "2",
  },
];

type Props = {};

const ChoresViewer = (props: Props) => {
  const [chores, setChores] = useState(CHORES);
  const [toEditChore, setToEditChore] = useState<Chore | null>(null);

  // Adds a new chore to the state
  const addCore = (chore: Chore) => {};

  // Changes the state of a chore to completed
  const completeChore = (chore: Chore) => {};

  // Deletes a chore from the state
  const deleteChore = (chore: Chore) => {};

  const updateChore = (chore: Chore) => {};

  return (
    <div className={styles.ChoresViewer}>
      {chores.map((chore) => (
        <ChoreView key={chore.id} chore={chore} />
      ))}
      <AddChoreBox />
    </div>
  );
};

export default ChoresViewer;
