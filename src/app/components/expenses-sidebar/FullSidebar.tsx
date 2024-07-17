import ClientUser from "@/app/types/ClientUser";
import { NavLink, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import React from "react";
import styles from "./expenses-siderbar.module.scss";

type Props = { users: ClientUser[]; visible: boolean };

const FullSidebar = ({ users, visible }: Props) => {
  return (
    <div
      style={{
        display: visible ? "block" : "none",
      }}
    >
      <div className={styles.ExpensesSidebarHeader}>
        <IconUser className={styles.ExpensesSidebarUserIcon} />
        <Text c="blue">Users</Text>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.email} className={styles.ExpensesSidebarUser}>
            <NavLink className={styles.ExpensesUserLink} label={user.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullSidebar;
