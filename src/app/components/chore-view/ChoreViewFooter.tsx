"use client";

import { ActionIcon, Flex, Tooltip } from "@mantine/core";
import { IconChecks, IconEdit, IconTrash } from "@tabler/icons-react";
import React from "react";
import ConfirmButton from "../confirm-button/ConfirmButton";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  onDeleteItem: () => void;
  onCompleteItem: () => void;
  loading: boolean;
};

const ChoreViewFooter = ({
  loading,
  id,
  onCompleteItem,
  onDeleteItem,
}: Props) => {
  const router = useRouter();

  const handleEditChore = () => {
    router.push(`/chores/edit-chore/${id}`);
  };

  return (
    <Flex gap={8} justify={"flex-end"}>
      <Tooltip label="Mark as completed">
        <ConfirmButton
          loading={loading}
          color="green"
          text="Are you sure?"
          onClick={onCompleteItem}
        >
          <IconChecks style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ConfirmButton>
      </Tooltip>
      <Tooltip label="Edit chore">
        <ActionIcon variant="outline" onClick={handleEditChore}>
          <IconEdit style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Delete chore">
        <ConfirmButton
          loading={loading}
          text="Are you sure?"
          onClick={onDeleteItem}
        >
          <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ConfirmButton>
      </Tooltip>
    </Flex>
  );
};

export default ChoreViewFooter;
