import { Card } from "@mantine/core";
import React, { ReactNode } from "react";
import styles from "./chore-box.module.scss";

type Props = {
  children: ReactNode;
  dotted?: boolean;
  className?: string;
};

const ChoreBox = ({ className, children, dotted = false }: Props) => {
  return <Card  style={{
    borderStyle: dotted ? "dotted" : "solid",
  }} className={`${styles.ChoreBox} ${className}`}>{children}</Card>;
};

export default ChoreBox;
