import React from "react";
import ChoresViewer from "./ChoresViewer";
import ClientChore from "../types/ClientChore";
import ClientUser from "../types/ClientUser";
import { postFetch } from "../utils/postFetch";

type Props = {
  email: string;
};

const ChorePage = async ({ email }: Props) => {
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
  return <ChoresViewer users={users} chores={chores} email={email} />;
};

export default ChorePage;
