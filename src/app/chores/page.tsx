import React, { Suspense } from "react";
import styles from "./chore-page.module.scss";
import { getServerSession } from "next-auth";
import ChorePageSkeleton from "../skeletons/chore-page/ChorePageSkeleton";
import ChorePage from "./ChorePage";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession();

  if (!session) {
    return null;
  }

  const email = session.user!.email!;

  return (
    <div className={styles.ChorePage}>
      <Suspense fallback={<ChorePageSkeleton />}>
        <ChorePage email={email} />
      </Suspense>
    </div>
  );
};

export default page;
