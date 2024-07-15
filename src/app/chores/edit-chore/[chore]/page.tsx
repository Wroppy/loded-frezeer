import { checkAuth } from "@/app/utils/checkAuth";
import { postFetch } from "@/app/utils/postFetch";
import { getServerSession } from "next-auth";
import React from "react";
import ChoreNotFoundPage from "./ChoreNotFoundPage";
import ChoreFoundPage from "./ChoreFoundPage";
import styles from "./edit-chore.module.scss";

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


  return (
    <div className={styles.EditChorePage}>
      {res.error ? (
        <ChoreNotFoundPage id={choreId} />
      ) : (
        <ChoreFoundPage email={session!.user!.email!} chore={res.chore} />
      )}
    </div>
  );
};

export default EditChorePage;
