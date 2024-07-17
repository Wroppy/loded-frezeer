import React from "react";
import styles from "./expenses-siderbar.module.scss";
import { NavLink, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import ClientUser from "@/app/types/ClientUser";

type Props = {};

const ExpensesSidebar = (props: Props) => {
  const users: ClientUser[] = [
    {
      name: "John Doe",
      email: "",
    },
    {
      name: "Jane Doe",
      email: "",
    },
    {
      name: "Alice",
      email: "",
    },
    {
      name: "Bob",
      email: "",
    },
    {
      name: "Charlie",
      email: "",
    },
  ];
  return (
    <div className={styles.ExpensesSidebar}>
      <div className={styles.ExpensesSidebarHeader}>
        <IconUser className={styles.ExpensesSidebarUserIcon} />
        <Text c="blue">Users</Text>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.email} className={styles.ExpensesSidebarUser}>
            <NavLink className={styles.ExpensesUserLink} label={user.name}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesSidebar;
