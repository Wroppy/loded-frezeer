import { TableTd, TableTr } from "@mantine/core";

import React from "react";

type Props = { text: string; span: number };

const EmptyTableRow = ({ text, span }: Props) => {
  return (
    <TableTr>
      <TableTd style={{textAlign: "center"}} colSpan={span}>{text}</TableTd>
    </TableTr>
  );
};

export default EmptyTableRow;
