"use client";

import { NavLink } from "@mantine/core";
import Link from "next/link";
import React from "react";
import styles from "./expenses-siderbar.module.scss";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
};

const SidebarNavLink = ({ href, label }: Props) => {
  const path = usePathname();

  return (
    <NavLink
      component={Link}
      href={href}
      className={styles.ExpensesUserLink}
      label={label}
      active={path === href}
    />
  );
};

export default SidebarNavLink;
