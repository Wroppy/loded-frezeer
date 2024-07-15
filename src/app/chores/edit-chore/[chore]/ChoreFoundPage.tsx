"use client";

import ManageChoreComponent from "@/app/components/ManageChoreComponent/ManageChoreComponent";
import BareBonesChore from "@/app/types/BareBonesChore";
import ClientChore from "@/app/types/ClientChore";
import ClientUser from "@/app/types/ClientUser";
import { postFetch } from "@/app/utils/postFetch";
import { showErrorMessage } from "@/app/utils/showErrorMessage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = { users: ClientUser[]; email: string; chore: ClientChore };

const ChoreFoundPage = ({ users, email, chore }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const editChore = async (newChore: BareBonesChore) => {
    setLoading(true);
    const res = await postFetch("/api/chores/edit-chore", {
      email,
      id: chore.id,
      bareBonesChore: newChore,
    });

    if (res.error) {
      setLoading(false);
      showErrorMessage("An error occurred editing the chore", res.error);
      return;
    }

    router.push("/chores");
  };

  const expectedUserEmail = users.find((u) => u.name === chore.expectedUser)!;
  chore = { ...chore, expectedUser: expectedUserEmail.email };

  return (
    <ManageChoreComponent
      onSubmit={editChore}
      users={users}
      chore={chore}
      title={"Edit Chore"}
      buttonText={"Edit Chore"}
      loading={loading}
    />
  );
};

export default ChoreFoundPage;
