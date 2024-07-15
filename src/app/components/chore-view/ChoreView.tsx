import ClientChore from "@/app/types/ClientChore";

import React from "react";
import ChoreBox from "../chore-box/ChoreBox";
import styles from "./chore-view.module.scss";
import ChoreViewFooter from "./ChoreViewFooter";
import ChoreTimeLine from "./ChoreTimeLine";
import { Flex } from "@mantine/core";

type Props = {
  chore: ClientChore;
  openModal: (chore: ClientChore) => void;
  deleteChore: (chore: ClientChore) => void;
  completeChore: (chore: ClientChore) => void;
};

const ChoreView = ({ deleteChore, completeChore, chore, openModal }: Props) => {
  const onEditItem = () => {
    openModal(chore);
  };

  const onDeleteItem = () => {
    deleteChore(chore);
  };

  const onCompleteItem = () => {
    completeChore(chore);
  };

  return (
    <ChoreBox className={styles.ChoreView}>
      <Flex style={{ flexGrow: 1 }} gap={8} direction={"column"}>
        <h2>{chore.name}</h2>
        <span>{chore.description}</span>
        <span>Expected cycle: {chore.expectedCycle}</span>
        <ChoreTimeLine chore={chore} />
      </Flex>
      {/* Buttons for editing, completing, or deleting chores */}
      <ChoreViewFooter
        onEditItem={onEditItem}
        onDeleteItem={onDeleteItem}
        onCompleteItem={onCompleteItem}
      />
    </ChoreBox>
  );
};

export default ChoreView;
