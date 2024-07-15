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
};

const ChoreView = ({ chore, openModal }: Props) => {
  const onEditItem = () => {
    openModal(chore);
  }



  return (
    <ChoreBox className={styles.ChoreView}>
      <Flex style={{ flexGrow: 1 }} gap={8} direction={"column"}>
        <h2>{chore.name}</h2>
        <span>{chore.description}</span>
        <span>Expected cycle: {chore.expectedCycle}</span>
        <ChoreTimeLine chore={chore}/>
        
      </Flex>
        {/* Buttons for editing, completing, or deleting chores */}
        <ChoreViewFooter onEditItem={onEditItem}/>
    </ChoreBox>
  );
};

export default ChoreView;
