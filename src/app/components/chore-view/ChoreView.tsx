import Chore from "@/app/types/ClientChore";

import React from "react";
import ChoreBox from "../chore-box/ChoreBox";
import styles from "./chore-view.module.scss";
import ChoreViewFooter from "./ChoreViewFooter";

type Props = {
  chore: Chore;
};

const ChoreView = ({ chore }: Props) => {
  return (
    <ChoreBox className={styles.ChoreView}>
      <div style={{ flexGrow: 1 }}>
        <h2>{chore.name}</h2>
        <p>{chore.description}</p>
        <p>Expected cycle: {chore.expectedCycle}</p>
        <p>Last completed: {chore.lastCompleted.toDateString()}</p>
        <p>Expected user: {chore.expectedUser}</p>
        <p>Next expected user: {chore.nextExpectedUser}</p>
      </div>
        {/* Buttons for editing, completing, or deleting chores */}
        <ChoreViewFooter/>
    </ChoreBox>
  );
};

export default ChoreView;
