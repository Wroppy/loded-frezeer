"use client";

import { ShoppingListContext } from "@/app/context/ShoppingListContext";
import { ShoppingListContextType } from "@/app/types/ShoppingListContextType";
import React, { useContext } from "react";
import styles from "./shopping-item-detailed-view.module.scss";
import { ActionIcon, Flex } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import ShoppingItemDetailedViewFooter from "./shopping-item-detailed-view-footer/ShoppingItemDetailedViewFooter";
import DetailedViewBody from "./DetailedViewBody";
import DetailedViewDrawer from "./DetailedViewDrawer";
import { useViewportSize } from "@mantine/hooks";

type Props = {};

const ShoppingItemDetailedView = (props: Props) => {
  const { selectedItem, setSelectedItem, name } = useContext(
    ShoppingListContext
  ) as ShoppingListContextType;

  const { width } = useViewportSize();

  return (
    <>
      {selectedItem && (
        <>
          <DetailedViewDrawer visible={width <= 800} />
          <div
            className={styles.ShoppingItemDetailedView}
            style={{ display: width > 800 ? "flex" : "none" }}
          >
            {/* Exit button  */}

            <Flex justify="end" style={{ width: "100%" }}>
              <ActionIcon
                variant="outline"
                onClick={() => setSelectedItem(null)}
              >
                <IconX style={{ width: "70%", height: "70%" }} stroke={1.5} />
              </ActionIcon>
            </Flex>
            <DetailedViewBody />
            <ShoppingItemDetailedViewFooter />
          </div>
        </>
      )}
    </>
  );
};

export default ShoppingItemDetailedView;
