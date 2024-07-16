import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";
import { Drawer } from "@mantine/core";
import React, { useContext } from "react";
import DetailedViewBody from "./DetailedViewBody";
import ShoppingItemDetailedViewFooter from "./shopping-item-detailed-view-footer/ShoppingItemDetailedViewFooter";
import styles from "./shopping-item-detailed-view.module.scss";

type Props = {
  visible: boolean;
};

const DetailedViewDrawer = ({ visible }: Props) => {
  const { drawerOpened, closeDrawer } = useContext(
    ShoppingListContext
  ) as ShoppingListContextType;
  return (
    <Drawer
      style={{ display: visible ? "block" : "none" }}
      opened={drawerOpened}
      onClose={closeDrawer}
      position="right"
    >
      <div
        className={styles.ShoppingItemDetailedView}
        style={{ height: "100%", backgroundColor: "transparent", padding: 0 }}
      >
        <DetailedViewBody />
        <ShoppingItemDetailedViewFooter />{" "}
      </div>
    </Drawer>
  );
};

export default DetailedViewDrawer;
