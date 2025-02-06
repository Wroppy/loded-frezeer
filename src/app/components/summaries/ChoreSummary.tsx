"use client";

import ClientChore from "@/app/types/ClientChore";
import React from "react";
import styles from "./summaries.module.scss";
import { Card } from "@mantine/core";
import ChoreView from "../chore-view/ChoreView";
import ChoreTimeLine from "../chore-view/ChoreTimeLine";

type Props = {
  chores: ClientChore[];
};

const Summary = ({ chore }: { chore: ClientChore }) => {
  console.log(chore)
  chore.lastCompleted = new Date(chore.lastCompleted);
  return (
    <Card className={styles.ChoreSummaryCard}>
      <h2 className={styles.choreHeading}>{chore.name}</h2>
      <div className={styles.choreDescription}>{chore.description}</div>
      <div className={styles.choreTimeline}>
        <ChoreTimeLine chore={chore} />
      </div>
    </Card>
  );
};

const ChoreSummary = ({ chores }: Props) => {
  return (
    <div className={styles.ChoresSummary}>
      <h2>Chores Summary</h2>
      <div className={styles.ChoresSummaryContent}>
        {chores.map((chore) => (
          <Summary key={chore.id} chore={chore} />
        ))}
      </div>
    </div>
  );
};

export default ChoreSummary;
