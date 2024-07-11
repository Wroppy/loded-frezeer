import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./../api/auth/[...nextauth]/auth_options";
import { checkAuth } from "../utils/checkAuth";
import { postFetch } from "../utils/postFetch";
import styles from "./flatmates.module.scss";
import { Card } from "@mantine/core";
import NotInFlatComponent from "./not-in-flat-component/NotInFlatComponent";
import { GetFlatResponse } from "../types/GetFlatResponse";
import InFlatComponent from "./in-flat-component/InFlatComponent";

type Props = {};

const FlatMatesPage = async (props: Props) => {
  const session = await getServerSession(authOptions);

  
  checkAuth(session);

  console.log(session);

  const flat = await postFetch("/api/flat/get-flat", {
    email: session!.user!.email,
  }) as GetFlatResponse;
  
  return (
    <div className={styles.FlatPage}>
      <Card className={styles.FlatCard} shadow="lg">
        {flat.flat ? (
          <InFlatComponent flat={flat.flat}/>
        ) : (
          <NotInFlatComponent email={session!.user!.email as string} />
        )}
      </Card>
    </div>
  );
};

export default FlatMatesPage;
