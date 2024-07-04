"use client";

import { ActionIcon } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { IconCopy } from "@tabler/icons-react";
import React, { ReactNode } from "react";

type Props = { copyText: string };

const CopyButton = ({ copyText }: Props) => {
  const clipboard = useClipboard();

  const copy = () => clipboard.copy(copyText);

  return (
    <ActionIcon onClick={copy} variant="outline">
      <IconCopy style={{ width: "70%", height: "70%" }} stroke={1.5} />
    </ActionIcon>
  );
};

export default CopyButton;
