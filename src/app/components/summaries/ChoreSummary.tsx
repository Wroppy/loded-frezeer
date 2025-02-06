import ClientChore from "@/app/types/ClientChore";
import React from "react";
import styles from "./summaries.module.scss";
import { Card } from "@mantine/core";

type Props = {
  chores: ClientChore[];
};

const Summary = ({ chore }: { chore: ClientChore }) => {
  return (
    <Card className={styles.Summary}>
      <div>{chore.name}</div>
      <div>{chore.description}</div> 
    </Card>
  );
};

const ChoreSummary = ({ chores }: Props) => {
  return (
    <div className={styles.ChoresSummary}>
      <div>Chores Summary</div>
      <div className={styles.ChoresSummaryContent}>
        {chores.map((chore) => (
          <Summary key={chore.id} chore={chore} />
        ))}
      </div>
    </div>
  );
};

export default ChoreSummary;
