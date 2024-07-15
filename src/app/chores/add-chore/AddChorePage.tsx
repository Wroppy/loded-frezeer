"use client";

import BareBonesChore from "@/app/types/BareBonesChore";
import ManageChoreComponent from "@/app/components/ManageChoreComponent/ManageChoreComponent";
import { Flex } from "@mantine/core";
import React from "react";
import ClientUser from "@/app/types/ClientUser";
import { postFetch } from "@/app/utils/postFetch";
import { showErrorMessage } from "@/app/utils/showErrorMessage";
import { useRouter } from "next/navigation";

type Props = {
  email: string;
  users: ClientUser[];
};

const AddChorePage = ({ users, email }: Props) => {
  const router = useRouter();

  const onSubmit = async (chore: BareBonesChore) => {
    console.log(chore);

    // Sends the chore to the server
    const res = (await postFetch("/api/chores/add-chore", {
      bareBonesChore: chore,
      email,
    })) as { error: string | null };

    if (res.error) {
      showErrorMessage("An error occured dding the chore", res.error);
      return;
    }

    // Redirects to the chores page
    router.push("/chores");
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
