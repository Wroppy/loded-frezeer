"use client";

import ManageChoreComponent from "@/app/components/ManageChoreComponent/ManageChoreComponent";
import BareBonesChore from "@/app/types/BareBonesChore";
import { Flex } from "@mantine/core";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const users = [
    { name: "John Doe", email: "john@email.com" },
    { name: "Jane Joe", email: "jane@email.com" },
    { name: "Jake Doe", email: "jake@email.com" },
  ];

  const onSubmit = (chore: BareBonesChore) => {
    console.log(chore);
  };

  return (
    <Flex justify={"center"} align={"center"} style={{ height: "100%" }}>
      <ManageChoreComponent
        onSubmit={onSubmit}
        title={"Add Chore"}
        buttonText="Create Chore"
        users={users}
      />
    </Flex>
  );
};

export default page;
