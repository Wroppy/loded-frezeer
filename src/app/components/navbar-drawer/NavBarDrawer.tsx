import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";

import React from "react";

type Props = {
  opened: boolean;
  close: () => void;
};

const NavBarDrawer = ({opened, close}: Props) => {
  return <Drawer opened={opened} onClose={close} title={"Loded Frezeer"}>
    <div>Drawer content</div>
    
  </Drawer>
};

export default NavBarDrawer;