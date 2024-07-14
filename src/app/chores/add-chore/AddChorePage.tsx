"use client";

import BareBonesChore from "@/app/types/BareBonesChore";
import ManageChoreComponent from "@/app/components/ManageChoreComponent/ManageChoreComponent";
import { Flex } from "@mantine/core";
import React from "react";
import ClientUser from "@/app/types/ClientUser";

type Props = {
  users: ClientUser[];
};

const AddChorePage = ({users}: Props) => {
  
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

export default AddChorePage;
