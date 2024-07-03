"use client";

import { Burger } from "@mantine/core";
import React, { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import styles from "./navbar.module.scss";

type Props = {};

const NavBar = (props: Props) => {
  const[navOpen, setNavOpen] = useState(false);
  const [ opened, {toggle} ] = useDisclosure();

  const openNavBar = () => {
    toggle();
  }

  return (
    <div className={styles.NavBar}>
      <Burger opened={opened} onClick={openNavBar} size="lg"/>
      <div>
        Loded Frezeer
      </div>
    </div>
  );
};

export default NavBar;
