"use client";

import ManageChoreComponent from "@/app/components/ManageChoreComponent/ManageChoreComponent";
import BareBonesChore from "@/app/types/BareBonesChore";
import ClientChore from "@/app/types/ClientChore";
import ClientUser from "@/app/types/ClientUser";
import React, { useState } from "react";

type Props = { users: ClientUser[]; email: string; chore: ClientChore };

const ChoreFoundPage = ({ users, email, chore }: Props) => {
  const [loading, setLoading] = useState(false);

  const editChore = async (chore: BareBonesChore) => {
    
  };

  const expectedUserEmail = users.find((u) => u.name === chore.expectedUser)!;
  chore = { ...chore, expectedUser: expectedUserEmail.email};

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
