import { Skeleton } from "@mantine/core";
import React from "react";

type Props = {};

const SidebarSkeleton = (props: Props) => {
  return (
    <div>
      <Skeleton height="100%" width="200px" />
    </div>
  );
};

export default SidebarSkeleton;
