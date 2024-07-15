"use client";

import React from "react";
import ChoreBox from "../chore-box/ChoreBox";
import styles from "./add-chore-box.module.scss";
import { IconTablePlus } from "@tabler/icons-react";
import { Flex, rem } from "@mantine/core";
import { useRouter } from "next/navigation";

type Props = {};

const AddChoreBox = (props: Props) => {
  const router = useRouter();

  return (
    <ChoreBox className={styles.AddChoreBox} dotted>
      <Flex
        onClick={() => router.push("/chores/add-chore")}
        align={"center"}
        justify={"center"}
        direction={"column"}
        style={{ width: "100%", height: "100%", cursor: "pointer" }}
      >
        <IconTablePlus
          style={{ width: rem(80), height: rem(80) }}
          stroke={1.5}
        />
        <div>Add a new chore</div>
      </Flex>
    </ChoreBox>
  );
};

export default AddChoreBox;
