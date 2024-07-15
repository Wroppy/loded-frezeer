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
  color?: string;
  loading?: boolean;
};

const ConfirmButton = ({
  text,
  onClick,
  children,
  disabled = false,
  color = "red",
  loading = false,
}: Props) => {
  return (
    <Popover withArrow>
      <PopoverTarget>
        <ActionIcon loading={loading} variant="outline" disabled={disabled}>
          {children}
        </ActionIcon>
      </PopoverTarget>
      <PopoverDropdown>
        <Flex direction={"column"} gap="sm">
          {text}
          <Flex gap="md" justify={"center"}>
            <Button
              loading={loading}
              variant="outline"
              onClick={onClick}
              color={color}
            >
              Confirm
            </Button>
            <Button loading={loading} variant="outline" color="gray">
              Cancel
            </Button>
          </Flex>
        </Flex>
      </PopoverDropdown>
    </Popover>
  );
};

export default ConfirmButton;
