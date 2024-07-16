import React from "react";
import styles from "./edit-chore.module.scss";

type Props = { children: React.ReactNode };

const layout = ({ children }: Props) => {
  return <div className={styles.EditChorePage}>{children}</div>;
};

export default layout;
