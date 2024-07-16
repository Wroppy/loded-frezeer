import { Card } from "@mantine/core";
import React from "react";
import InFlatComponent from "./in-flat-component/InFlatComponent";
import NotInFlatComponent from "./not-in-flat-component/NotInFlatComponent";
import { GetFlatResponse } from "../types/GetFlatResponse";
import { postFetch } from "../utils/postFetch";
import styles from "./flatmates.module.scss";

type Props = {
  email: string;
};

const FlatMatePage = async ({ email }: Props) => {
  const flat = (await postFetch("/api/flat/get-flat", {
    email: email,
  })) as GetFlatResponse;
  return (
    <Card className={styles.FlatCard} shadow="lg">
      {flat.flat ? (
        <InFlatComponent flat={flat.flat} />
      ) : (
        <NotInFlatComponent email={email} />
      )}
    </Card>
  );
};

export default FlatMatePage;
