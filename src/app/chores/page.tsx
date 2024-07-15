import React from "react";
import styles from "./chore-page.module.scss";
import ChoresViewer from "./ChoresViewer";
import { getServerSession } from "next-auth";
import ClientUser from "../types/ClientUser";
import { postFetch } from "../utils/postFetch";
import ClientChore from "../types/ClientChore";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession();

  if (!session) {
    return null;
  }

  const email = session.user!.email!;

  // Gets the users in the flat
  const { users, error } = (await postFetch("/api/get-users", {
    email,
  })) as { users: ClientUser[]; error: string };

  if (error) {
    return null;
  }

  // Gets the chores
  const { chores, error: e } = (await postFetch("/api/chores/get-chores", {
    email,
  })) as { chores: ClientChore[]; error: string };

  // Converts the date strings to Date objects
  chores.forEach((chore) => {
    chore.lastCompleted = new Date(chore.lastCompleted);
  });


  if (e) {
    return null;
  }


  return (
    <div className={styles.ChorePage}>
      <ChoresViewer email={email} chores={chores} users={users}/>
    </div>
  );
};

export default page;
