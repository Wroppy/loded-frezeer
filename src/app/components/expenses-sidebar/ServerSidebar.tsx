import React from "react";
import ExpensesSidebar from "./ExpensesSidebar";
import { postFetch } from "@/app/utils/postFetch";
import { getServerSession } from "next-auth";
import ClientUser from "@/app/types/ClientUser";

type Props = {};

const ServerSidebar = async (props: Props) => {
  const session = await getServerSession();
  const email = session!.user!.email!;

  let { users } = (await postFetch("/api/get-users", {
    email,
  })) as { users: ClientUser[] };

  // Removes the users own email from the list
  users = users.filter((user) => user.email != email);

  return <ExpensesSidebar users={users} />;
};

export default ServerSidebar;
