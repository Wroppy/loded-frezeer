import { Tooltip, ActionIcon, Skeleton } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import React, { Suspense } from "react";
import styles from "./user-expenses.module.scss";
import { postFetch } from "@/app/utils/postFetch";
import { showErrorMessage } from "@/app/utils/showErrorMessage";

import ClientUser from "@/app/types/ClientUser";
import { redirect } from "next/navigation";
type Props = {
  targetUser: string;
};

const NameHeading = async ({ targetUser }: Props) => {
  const res = (await postFetch("/api/get-user", { user: targetUser })) as {
    user: ClientUser;
    error?: string;
  };

  if (res.error) {
    redirect("/expenses");
  }

  return <h1>{res.user.name}&apos;s Expenses</h1>;
};

const UserExpensesHeading = ({ targetUser }: Props) => {
  return (
    <div className={styles.UserExpensesHeading}>
      <Suspense fallback={<Skeleton height={50}/>}>
        <NameHeading targetUser={targetUser} />
      </Suspense>

      <Tooltip label="Add Expense" position="left">
        <ActionIcon variant="outline">
          <IconPlus />
        </ActionIcon>
      </Tooltip>
    </div>
  );
};

export default UserExpensesHeading;
