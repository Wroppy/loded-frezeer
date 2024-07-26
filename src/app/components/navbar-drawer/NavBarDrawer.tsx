"use client";

import { Box, Drawer, Flex, NavLink } from "@mantine/core";
import {
  IconBasket,
  IconDashboard,
  IconHome,
  IconPigMoney,
  IconWash,
} from "@tabler/icons-react";

import React from "react";
import { usePathname } from "next/navigation";
import LogOutButton from "../logout-button/LogOutButton";
import Link from "next/link";

type Props = {
  opened: boolean;
  close: () => void;
};

const NavBarDrawer = ({ opened, close }: Props) => {
  const links = [
    { title: "Dashboard", href: "/", Icon: IconDashboard },
    { title: "Shopping List", href: "/shoppinglist", Icon: IconBasket },
    { title: "Expenses", href: "/expenses", Icon: IconPigMoney },
    { title: "Chores", href: "/chores", Icon: IconWash },
    { title: "Flatmates", href: "/flatmates", Icon: IconHome },
  ];

  const validLinks: string[] = [];
  links.forEach((link) => {
    if (link.href !== "/") {
      validLinks.push(link.href);
    }
  });

  const path = usePathname();

  const isPathValid = () => {
    // Returns if the path starts with any of the valid links, or if the path is the root path
    return validLinks.some((link) => path.startsWith(link)) || path === "/";
  };

  const isButtonActive = (href: string): boolean => {
    if (href === "/") {
      return path === "/";
    }

    return path.startsWith(href);
  }

  return (
    <Drawer opened={opened} onClose={close} title={"Loded Frezeer"}>
      <Flex
        direction="column"
        justify={"space-between"}
        style={{ height: "100%" }}
      >
        <Box style={{ flexGrow: "1" }}>
          {links.map(({ title, href, Icon }) => (
            <NavLink
              key={title}
              leftSection={<Icon />}
              onClick={close}
              href={href}
              label={title}
              variant="light"
              active={isButtonActive(href)}
              disabled={!isPathValid()}
              component={Link}
            />
          ))}
        </Box>
        <Flex justify={"right"}>
          <LogOutButton disabled={!isPathValid()} />
        </Flex>
      </Flex>
    </Drawer>
  );
};

export default NavBarDrawer;
