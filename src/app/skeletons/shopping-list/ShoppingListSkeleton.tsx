import React from "react";
import { Flex, Skeleton } from "@mantine/core";
import rootStyles from "./../../shoppinglist/shopping-list-page.module.scss";
import styles from "./shopping-list-skeleton.module.scss";

type Props = {};

const ShoppingListSkeleton = (props: Props) => {
  return (
    <Flex className={rootStyles.ShoppingListPage} direction={"column"}>
      <Flex className={styles.ShoppingListHeading}>
        <Skeleton className={styles.ShoppingListSearch} />
        <Skeleton className={styles.ShoppingListForSelect} />
        <Skeleton className={styles.ShoppingListQuantity} />
        <Skeleton className={styles.ShoppingListAddButton} />
      </Flex>
      <Flex className={styles.ShoppingListBody}>
        <Skeleton className={styles.ShoppingListBodySkeleton}/>
      </Flex>
      <Flex
        justify={"flex-end"}
      className={styles.ShoppingListFooter}>
          <Skeleton className={styles.ShoppingListFooterButton} />
      </Flex>
    </Flex>
  );
};

export default ShoppingListSkeleton;
