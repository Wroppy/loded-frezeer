"use client";

import BareBonesChore from "@/app/types/BareBonesChore";
import ManageChoreComponent from "@/app/components/ManageChoreComponent/ManageChoreComponent";
import { Flex } from "@mantine/core";
import React, { useState } from "react";
import ClientUser from "@/app/types/ClientUser";
import { postFetch } from "@/app/utils/postFetch";
import { showErrorMessage } from "@/app/utils/showErrorMessage";
import { useRouter } from "next/navigation";

type Props = {
  email: string;
  users: ClientUser[];
};

const AddChorePage = ({ users, email }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (chore: BareBonesChore) => {
    setLoading(true);
    // Sends the chore to the server
    const res = (await postFetch("/api/chores/add-chore", {
      bareBonesChore: chore,
      email,
    })) as { error: string | null };

    if (res.error) {
      showErrorMessage("An error occurred adding the chore", res.error);
      setLoading(false);
      return;
    }

    // Redirects to the chores page
    router.push("/chores");
  };

  return (
    <Flex justify={"center"} align={"center"} style={{ width: "100%", height: "100%" }}>
      <ManageChoreComponent
        loading={loading}
        onSubmit={onSubmit}
        title={"Add Chore"}
        buttonText="Create Chore"
        users={users}
      />
    </Flex>
  );
};

export default AddChorePage;
