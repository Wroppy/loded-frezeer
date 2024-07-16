import React, { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./../api/auth/[...nextauth]/auth_options";
import { checkAuth } from "../utils/checkAuth";
import styles from "./flatmates.module.scss";
import FlatMatesPage from "./FlatMatesPage";
import FlatMatesSkeleton from "../skeletons/FlatMatesSkeleton";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);

  checkAuth(session);
  return (
    <div className={styles.FlatPage}>
      <Suspense fallback={<FlatMatesSkeleton/>}>
        <FlatMatesPage email={session!.user!.email!} />
      </Suspense>
    </div>
  );
};

export default page;
