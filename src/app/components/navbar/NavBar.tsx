"use client";

import { Burger } from "@mantine/core";
import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import styles from "./navbar.module.scss";
import NavBarDrawer from "../navbar-drawer/NavBarDrawer";

type Props = {};

const NavBar = (props: Props) => {
  const [burgerOpened, { toggle: burgerToggle }] = useDisclosure();
  const [drawerOpened, { open, close }] = useDisclosure();
  const openNavBar = () => {
    burgerToggle();
    open();
  };

  const closeNavBar = () => {
    burgerToggle();
    close();
  };

  return (
    <div className={styles.NavBar}>
      <NavBarDrawer opened={drawerOpened} close={closeNavBar} />
      <Burger opened={burgerOpened} onClick={openNavBar} size="lg"/>
        <div>Loded Frezeer</div>
    </div>
  );
};

export default NavBar;
