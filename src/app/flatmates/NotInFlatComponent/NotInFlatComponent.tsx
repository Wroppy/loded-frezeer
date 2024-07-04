"use client";

import React from "react";
import styles from "./../flatmates.module.scss";
import { Button, Flex, TextInput } from "@mantine/core";

type Props = { email: string };

const NotInFlatComponent = ({ email }: Props) => {
  const [flatName, setFlatName] = React.useState("");
  const [flatCode, setFlatCode] = React.useState("");

  const createFlat = async () => {};

  return (
    <div className={styles.NotInFlatComponent}>
      <div className={styles.NotInFlatHeading}>
        You are currently not in a flat
      </div>

      <div className={styles.FlatOption}>
        <TextInput
          label="Create a new flat"
          placeholder="Enter the name of your flat"
          value={flatName}
          onChange={(event) => setFlatName(event.currentTarget.value)}
        />
        <Flex justify="right">
          <Button>Create flat</Button>
        </Flex>
      </div>
      <div className={styles.FlatOption}>
        <TextInput
          label="Join a flat by code"
          placeholder="Enter the flat ID"
          value={flatCode}
          onChange={(event) => setFlatCode(event.currentTarget.value)}
        />
        <Flex justify="right">
          <Button>Join flat</Button>
        </Flex>
      </div>
    </div>
  );
};

export default NotInFlatComponent;
