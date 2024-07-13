import React from "react";
import ChoreBox from "../components/chore-box/ChoreBox";
import AddChoreBox from "../components/add-chore-box/AddChoreBox";
import styles from "./chore-page.module.scss";
import ChoreView from "../components/chore-view/ChoreView";
import Chore from "../types/ClientChore";
import ChoreCycles from "../Enums/ChoreCycles";

type Props = {};

const page = (props: Props) => {
  const chores: Chore[] = [
    {
      name: "Clean the house",
      description: "Vacuum and mop the floors",
      expectedCycle: ChoreCycles.Weekly,
      lastCompleted: new Date(2021, 8, 1),
      expectedUser: "John Doe",
      nextExpectedUser: "Jane Doe",
      id: "1",
      previousUser: "Jack Doe"
    },
    {
      name: "Trash",
      description: "Take out the trash",
      expectedCycle: ChoreCycles.Daily,
      lastCompleted: new Date(2021, 8, 1),
      expectedUser: "John Doe",
      nextExpectedUser: "Jane Doe",
      id: "2",
    }
  ]
  return <div className={styles.ChorePage}>
    <AddChoreBox />
    {chores.map(chore => <ChoreView key={chore.id} chore={chore} />)}
  </div>;
};

export default page;
