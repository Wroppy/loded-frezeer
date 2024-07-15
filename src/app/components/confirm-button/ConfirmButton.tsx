"use client";

import {
  ActionIcon,
  Button,
  Flex,
  Popover,
  PopoverDropdown,
  PopoverTarget,
} from "@mantine/core";
import React, { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  text?: string;
};

const ConfirmButton = ({
  text,
  onClick,
  children,
  disabled = false,
}: Props) => {
  return (
    <Popover withArrow>
      <PopoverTarget>
        <ActionIcon variant="outline" disabled={disabled}>
          {children}
        </ActionIcon>
      </PopoverTarget>
      <PopoverDropdown>
        <Flex direction={"column"} gap="sm">
          {text}
          <Flex gap="md" justify={"center"}>
            <Button variant="outline" onClick={onClick} color="green">
              Confirm
            </Button>
            <Button variant="outline" color="gray">
              Cancel
            </Button>
          </Flex>
        </Flex>
      </PopoverDropdown>
    </Popover>
  );
};

export default ConfirmButton;
