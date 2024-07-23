import { Flex } from "@mantine/core";
import React, { ReactNode, Suspense } from "react";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Flex
        justify={"center"}
        align={"center"}
        style={{ width: "100%", height: "100%" }}
      >
        {children}
      </Flex>
    </Suspense>
  );
};

export default layout;
