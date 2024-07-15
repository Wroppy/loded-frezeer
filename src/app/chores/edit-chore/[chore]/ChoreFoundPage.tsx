import ClientChore from "@/app/types/ClientChore";
import React from "react";

type Props = { email: string; chore: ClientChore };

const ChoreFoundPage = ({ email, chore }: Props) => {
  return <div>{JSON.stringify(chore)}</div>;
};

export default ChoreFoundPage;
