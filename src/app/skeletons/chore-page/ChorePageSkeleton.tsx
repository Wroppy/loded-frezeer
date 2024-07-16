import { Flex, Skeleton } from "@mantine/core";
import React from "react";
import ChoreSkeleton from "./ChoreSkeleton";
import styles from "./../../chores/chore-page.module.scss"

type Props = {};

const ChorePageSkeleton = (props: Props) => {
  return (
    <div className={`${styles.ChoresViewer} ${styles.SkeletonChores}`}>
      <ChoreSkeleton />
      <ChoreSkeleton />
      <ChoreSkeleton />
    </div>
  );
};

export default ChorePageSkeleton;
