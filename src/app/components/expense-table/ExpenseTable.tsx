import { Flex, Table, TableTbody, TableTh, TableThead } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  heading: string;
  moneyColumnText: string;
  children: ReactNode;
};

const ExpenseTable = ({ heading, moneyColumnText, children }: Props) => {
  return (
    <Flex direction={"column"}>
      <h3>{heading}</h3>
      <Table>
        <TableThead>
          <TableTh>User</TableTh>
          <TableTh style={{width: "75px"}}align="right">{moneyColumnText}</TableTh>
        </TableThead>
        <TableTbody>{children}</TableTbody>
      </Table>
    </Flex>
  );
};

export default ExpenseTable;
