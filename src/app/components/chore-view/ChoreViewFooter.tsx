import { ActionIcon, Flex, Tooltip } from "@mantine/core";
import { IconChecks, IconEdit, IconTrash } from "@tabler/icons-react";
import React from "react";

type Props = {};

const ChoreViewFooter = (props: Props) => {
  return (
    <Flex gap={8} justify={"flex-end"}>
      <Tooltip label="Mark as completed">
        <ActionIcon variant="outline">
          <IconChecks style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Edit chore">
        <ActionIcon variant="outline">
          <IconEdit style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Delete chore">
        <ActionIcon variant="outline">
          <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
    </Flex>
  );
};

export default ChoreViewFooter;
