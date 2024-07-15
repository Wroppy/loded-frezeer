"use client";

import { ActionIcon, Flex, Tooltip } from "@mantine/core";
import { IconChecks, IconEdit, IconTrash } from "@tabler/icons-react";
import React from "react";
import ConfirmButton from "../confirm-button/ConfirmButton";
import ClientChore from "@/app/types/ClientChore";

type Props = {
  onEditItem: () => void;
};

const ChoreViewFooter = ({onEditItem}: Props) => {
  return (
    <Flex gap={8} justify={"flex-end"}>
      <Tooltip label="Mark as completed">
        <ConfirmButton text="Are you sure?">
          <IconChecks style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ConfirmButton>
      </Tooltip>
      <Tooltip label="Edit chore">
        <ActionIcon variant="outline" onClick={onEditItem}>
          <IconEdit style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Delete chore">
        <ConfirmButton text="Are you sure?">
          <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ConfirmButton>
      </Tooltip>
    </Flex>
  );
};

export default ChoreViewFooter;
