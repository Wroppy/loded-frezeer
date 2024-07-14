import ManageChoreComponent from "@/app/components/ManageChoreComponent/ManageChoreComponent";
import { Flex } from "@mantine/core";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const users = [
    { name: "John Doe", email: "john@email.com" },
    { name: "Jane Joe", email: "jane@email.com" },
    { name: "Jake Doe", email: "jake@email.com" },
  ];
  return (
    <Flex justify={"center"} align={"center"} style={{height: "100%"}}>
      <ManageChoreComponent users={users} />
    </Flex>
  );
};

export default page;
