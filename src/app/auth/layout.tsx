import React, { ReactNode } from "react";
import styles from "./auth-page.module.scss";

type Props = { children: ReactNode };

const layout = ({ children }: Props) => {
  return <div className={styles.AuthPage}>{children}</div>;
};

export default layout;
