import ClientUser from "@/app/types/ClientUser";
import { Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import React from "react";
import styles from "./expenses-siderbar.module.scss";
import SidebarNavLink from "./SidebarNavLink";

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
        <SidebarNavLink href="/expenses" label="All Users" />
        {users.map((user) => {
          const link = `/expenses/user/${user.email.replace("@", "-")}`;
          return (
            <div key={user.email} className={styles.ExpensesSidebarUser}>
              <SidebarNavLink href={link} label={user.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FullSidebar;
