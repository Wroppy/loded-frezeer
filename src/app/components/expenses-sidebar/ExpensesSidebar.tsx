"use client";

import React, { useState } from "react";
import styles from "./expenses-siderbar.module.scss";
import { ActionIcon, NavLink, Text } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconUser } from "@tabler/icons-react";
import ClientUser from "@/app/types/ClientUser";
import FullSidebar from "./FullSidebar";
import CollapsedSidebar from "./CollapsedSidebar";

type Props = { users: ClientUser[] };

const ExpensesSidebar = ({ users }: Props) => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div
      style={{
        maxWidth: open ? "200px" : "50px",
      }}
      className={styles.ExpensesSidebar}
    >
      <div className={styles.ExpensesBody}>
        <FullSidebar users={users} visible={open} />
        <CollapsedSidebar visible={!open} />
      </div>
      <div className={styles.ExpensesFooter}>
        <ActionIcon variant="outline" onClick={toggleSidebar}>
          {open ? <IconArrowLeft /> : <IconArrowRight />}
        </ActionIcon>
      </div>
    </div>
  );
};

export default ExpensesSidebar;
