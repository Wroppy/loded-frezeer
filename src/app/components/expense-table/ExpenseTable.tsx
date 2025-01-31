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
  children: ReactNode;
};

const ExpenseTable = ({ heading, children }: Props) => {
  return (
    <Flex direction={"column"} style={{ marginBottom: "20px" }}>
      <h3>{heading}</h3>
      <Table>
        <TableThead>
          <TableTr>
            <TableTh style={{ width: "100px" }}>Status</TableTh>
            <TableTh>Name</TableTh>
            <TableTh style={{ width: "75px" }} align="right">
              Amount
            </TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{children}</TableTbody>
      </Table>
    </Flex>
  );
};

export default ExpenseTable;
