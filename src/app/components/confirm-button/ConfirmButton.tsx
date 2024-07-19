"use client";

import {
  ActionIcon,
  Button,
  Flex,
  Popover,
  PopoverDropdown,
  PopoverTarget,
} from "@mantine/core";
import React, { ReactNode, useState } from "react";

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
  // State for the opened popover
  const [opened, setOpened] = useState(false);

  const handleOnClick = () => {
    setOpened(false);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Popover withArrow opened={opened} onChange={setOpened}>
      <PopoverTarget>
        <ActionIcon
          onClick={() => setOpened((o) => !o)}
          loading={loading}
          variant="outline"
          disabled={disabled}
        >
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
              onClick={handleOnClick}
              color={color}
            >
              Confirm
            </Button>
            <Button onClick={() => setOpened(false)} loading={loading} variant="outline" color="gray">
              Cancel
            </Button>
          </Flex>
        </Flex>
      </PopoverDropdown>
    </Popover>
  );
};

export default ConfirmButton;
