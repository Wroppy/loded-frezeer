import { IconCashBanknote, IconUser } from "@tabler/icons-react";
import React from "react";
import styles from "./expenses-siderbar.module.scss";

type Props = { visible: boolean };

const CollapsedSidebar = ({ visible }: Props) => {
  return (
    <div className={styles.ExpensesSidebarHeader} style={{ display: visible ? "block" : "none" }}>
      <IconCashBanknote className={styles.ExpensesSidebarUserIcon} />
      <IconUser className={styles.ExpensesSidebarUserIcon} />
    </div>
  );
};

export default CollapsedSidebar;
