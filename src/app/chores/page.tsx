import React from "react";
import ChoreBox from "../components/chore-box/ChoreBox";
import AddChoreBox from "../components/add-chore-box/AddChoreBox";
import styles from "./chore-page.module.scss";

type Props = {};

const page = (props: Props) => {
  const chores = [
    {
      name: "Clean the house",
      description: "Vacuum and mop the floors",
      expectedCycle: "Weekly",
      lastCompleted: new Date(2021, 8, 1),
      expectedUser: "John Doe",
      nextExpectedUser: "Jane Doe",
      id: "1"
    },
    {
      name: "Trash",
      description: "Take out the trash",
      expectedCycle: "Daily",
      lastCompleted: new Date(2021, 8, 1),
      expectedUser: "John Doe",
      nextExpectedUser: "Jane Doe",
      id: "2"
    }
  ]
  return <div className={styles.ChorePage}>
    <AddChoreBox />
  </div>;
};

export default page;
