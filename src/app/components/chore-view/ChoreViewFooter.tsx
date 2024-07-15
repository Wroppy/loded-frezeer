"use client";

import { ActionIcon, Flex, Tooltip } from "@mantine/core";
import { IconChecks, IconEdit, IconTrash } from "@tabler/icons-react";
import React from "react";
import ConfirmButton from "../confirm-button/ConfirmButton";
import ClientChore from "@/app/types/ClientChore";
import Link from "next/link";

type Props = {
  id: string;
  onDeleteItem: () => void;
  onCompleteItem: () => void;
};

const ChoreViewFooter = ({ id, onCompleteItem, onDeleteItem }: Props) => {
  return (
    <Flex gap={8} justify={"flex-end"}>
      <Tooltip label="Mark as completed">
        <ConfirmButton
          color="green"
          text="Are you sure?"
          onClick={onCompleteItem}
        >
          <IconChecks style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ConfirmButton>
      </Tooltip>
      <Tooltip label="Edit chore">
        <ActionIcon
          variant="outline"
          component={Link}
          href={`/chores/edit-chore/${id}`}
        >
          <IconEdit style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Delete chore">
        <ConfirmButton text="Are you sure?" onClick={onDeleteItem}>
          <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ConfirmButton>
      </Tooltip>
    </Flex>
  );
};

export default ChoreViewFooter;
