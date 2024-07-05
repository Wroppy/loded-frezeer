"use client";

import React, { FormEvent, useState } from "react";
import styles from "./../flatmates.module.scss";
import { Button, Flex, TextInput } from "@mantine/core";
import { postFetch } from "@/app/utils/postFetch";
import { JoinFlatResponse } from "@/app/types/JoinFlatResponse";
import { useRouter } from "next/navigation";
import { showErrorMessage } from "@/app/utils/showErrorMessage";

type Props = { email: string };

const NotInFlatComponent = ({ email }: Props) => {
  const [flatName, setFlatName] = useState("");
  const [flatCode, setFlatCode] = useState("");
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const createFlat = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    // Create a new flat
    const response = await postFetch("/api/flat/create-flat", {
      email,
      name: flatName,
    });

    if (response.error) {
      showErrorMessage("Error creating flat", response.error);
      setLoading(false);
      return;
    }

    router.refresh();
  };

  const joinFlat = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    // Join a flat
    const { error, flat } = (await postFetch("/api/flat/join-flat", {
      email,
      flatJoinCode: flatCode,
    })) as JoinFlatResponse;

    if (error) {
      showErrorMessage("Error joining flat", error);
      setLoading(false);
      return;
    }

    router.refresh();
  };

  return (
    <div className={styles.NotInFlatComponent}>
      <div className={styles.NotInFlatHeading}>
        You are currently not in a flat
      </div>

      <form className={styles.FlatOption} onSubmit={createFlat}>
        <TextInput
          required
          label="Create a new flat"
          placeholder="Enter the name of your flat"
          value={flatName}
          onChange={(event) => setFlatName(event.currentTarget.value)}
        />
        <Flex justify="right">
          <Button disabled={loading} type="submit">
            Create flat
          </Button>
        </Flex>
      </form>
      <form className={styles.FlatOption} onSubmit={joinFlat}>
        <TextInput
          label="Join a flat by code"
          placeholder="Enter the flat join code"
          value={flatCode}
          onChange={(event) => setFlatCode(event.currentTarget.value)}
          required
        />
        <Flex justify="right">
          <Button disabled={loading} type="submit">
            Join flat
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default NotInFlatComponent;
