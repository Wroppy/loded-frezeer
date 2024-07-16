import { getServerSession } from "next-auth";
import React, { Suspense } from "react";
import { checkAuth } from "../utils/checkAuth";
import { Flex } from "@mantine/core";
import ShoppingListSkeleton from "../skeletons/shopping-list/ShoppingListSkeleton";

type Props = { children: React.ReactNode };

const layout = async ({ children }: Props) => {
  // Checks that the user is logged in
  const session = await getServerSession();

  checkAuth(session);

  return (
    <Flex style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={<ShoppingListSkeleton />}>
        {children}
      </Suspense>
    </Flex>
  );
};

export default layout;
