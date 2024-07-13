import React from "react";
import styles from "./chore-page.module.scss";
import ChoresViewer from "./ChoresViewer";

type Props = {};

const page = (props: Props) => {
  return (
    <div className={styles.ChorePage}>
      <ChoresViewer />
    </div>
  );
};

export default page;
