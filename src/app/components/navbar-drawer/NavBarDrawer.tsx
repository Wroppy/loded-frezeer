"use client";

import { useDisclosure } from "@mantine/hooks";
import { Drawer, NavLink } from "@mantine/core";
import {
  IconBasket,
  IconDashboard,
  IconHome,
  IconPigMoney,
  IconWash,
} from "@tabler/icons-react";

import React from "react";
import { usePathname } from "next/navigation";

type Props = {
  opened: boolean;
  close: () => void;
};

const NavBarDrawer = ({ opened, close }: Props) => {
  const links = [
    { title: "Dashboard", href: "/", Icon: IconDashboard },
    { title: "Shop", href: "/shoppinglist", Icon: IconBasket },
    { title: "Expenses", href: "/expenses", Icon: IconPigMoney },
    { title: "Chores", href: "/chores", Icon: IconWash },
    { title: "Flatmates", href: "/flatmates", Icon: IconHome },
  ];

  const path = usePathname();

  return (
    <Drawer opened={opened} onClose={close} title={"Loded Frezeer"}>
      {links.map(({ title, href, Icon }) => (
        <NavLink
          key={title}
          leftSection={<Icon />}
          onClick={close}
          href={href}
          label={title}
          variant="light"
          active={path === href}
        />
      ))}
    </Drawer>
  );
};

export default NavBarDrawer;
