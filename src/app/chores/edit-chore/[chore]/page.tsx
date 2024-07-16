import { checkAuth } from "@/app/utils/checkAuth";
import { postFetch } from "@/app/utils/postFetch";
import { getServerSession } from "next-auth";
import React from "react";
import ChoreNotFoundPage from "./ChoreNotFoundPage";
import ChoreFoundPage from "./ChoreFoundPage";
import styles from "./edit-chore.module.scss";
import { redirect } from "next/navigation";

type Props = {
  params: {
    chore: string;
  };
};

const EditChorePage = async ({ params }: Props) => {
  const session = await getServerSession();

  checkAuth(session);

  const choreId = params.chore;
  // Gets the chore from the database
  const res = await postFetch("/api/chores/get-chore", {
    email: session!.user!.email,
    choreId,
  });

  // If the chore is not found return the ChoreNotFoundPage
  if (res.error) {
    return <ChoreNotFoundPage id={choreId} />;
  }

  // Gets the users in the flat
  const usersRes = await postFetch("/api/get-users", {
    email: session!.user!.email,
  });

  // If the user is not in a flat redirect to the flatmates page
  if (usersRes.error) {
    redirect("/flatmates");
  }

  return (
    <ChoreFoundPage
      users={usersRes.users}
      email={session!.user!.email!}
      chore={res.chore}
    />
  );
};

export default EditChorePage;
