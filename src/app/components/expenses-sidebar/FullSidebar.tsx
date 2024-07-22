import ClientUser from "@/app/types/ClientUser";
import { NavLink, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import React from "react";
import styles from "./expenses-siderbar.module.scss";
import Link from "next/link";

type Props = { users: ClientUser[]; visible: boolean };

const FullSidebar = ({ users, visible }: Props) => {
  return (
    <div
      style={{
        display: visible ? "block" : "none",
      }}
    >
      <NavLink component={Link} href="/expenses" className={styles.ExpensesUserLink} label="All" />
      <div className={styles.ExpensesSidebarHeader}>
        <IconUser className={styles.ExpensesSidebarUserIcon} />
        <Text c="blue">Users</Text>
      </div>
      <div>
        {users.map((user) => {
          const link = `/expenses/user/${user.email.replace("@", "-")}`;
          return (<div key={user.email} className={styles.ExpensesSidebarUser}>
            <NavLink component={Link} href={link} className={styles.ExpensesUserLink} label={user.name} />
          </div>)
})}
      </div>
    </div>
  );
};

export default FullSidebar;
