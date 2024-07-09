import { ActionIcon, Flex, Tooltip } from "@mantine/core";
import React from "react";
import styles from "./../shopping-item-detailed-view.module.scss";
import { IconEdit, IconShoppingCart, IconTrash } from "@tabler/icons-react";

type Props = {};

const ShoppingItemDetailedViewFooter = (props: Props) => {
  const buttons = [
    { tip: "Buy", icon: IconShoppingCart },
    { tip: "Edit", icon: IconEdit },
    { tip: "Delete", icon: IconTrash },
  ];

  return (
    <div className={styles.ShoppingItemDetailedViewFooter}>
        {buttons.map((button, index) => {
          const Icon = button.icon;
          return (
            <Tooltip label={button.tip} key={index}>
            <ActionIcon variant="outline">
              <Icon style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
          );2
        })}
    </div>
  );
};

export default ShoppingItemDetailedViewFooter;
