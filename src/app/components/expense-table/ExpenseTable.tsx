import ExpenseStatus from "@/app/Enums/ExpenseStatus";
import {
  Flex,
  Table,
  TableTbody,
  TableTh,
  TableThead,
  TableTr,
  ThemeIcon,
} from "@mantine/core";
import { IconPointFilled } from "@tabler/icons-react";
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
          <TableTr>
            <TableTh style={{ width: "100px" }}>Status</TableTh>
            <TableTh>User</TableTh>
            <TableTh style={{ width: "75px" }} align="right">
              {moneyColumnText}
            </TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{children}</TableTbody>
      </Table>
    </Flex>
  );
};

export default ExpenseTable;
