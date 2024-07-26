import ClientUser from "@/app/types/ClientUser";
import { IconCashBanknote, IconUser } from "@tabler/icons-react";
import React from "react";
import styles from "./expenses-siderbar.module.scss";
import SidebarNavLink from "./SidebarNavLink";
import ExpensesSidebarHeading from "./ExpensesSidebarHeading";

type Props = { users: ClientUser[]; visible: boolean };

const FullSidebar = ({ users, visible }: Props) => {
  return (
    <div
      style={{
        display: visible ? "block" : "none",
      }}
    >
      {/* Payment Group headings */}
      <ExpensesSidebarHeading text="Payment Groups" Icon={IconCashBanknote} />
      <div>
        <SidebarNavLink href="/expenses/payment-group" label="All Payment Groups" />
        <SidebarNavLink href="/expenses/payment-group/add" label="Create Payment Group" />
      </div>
      {/* Expenses Headings */}
      <ExpensesSidebarHeading text="Users" Icon={IconUser} />
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
