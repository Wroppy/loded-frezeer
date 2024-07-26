import React, { ReactNode } from "react";
import styles from "./edit-payment-group.module.scss";

type Props = { children: ReactNode };

const layout = ({ children }: Props) => {
  return <div className={styles.EditChorePage}>{children}</div>;
};

export default layout;
