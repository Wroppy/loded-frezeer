import { Flat } from "@/app/database/types/Flat";
import React from "react";
import styles from "./../flatmates.module.scss";
import { Flex } from "@mantine/core";
import CopyButton from "@/app/components/copy-button/CopyButton";

type Props = { flat: Flat };

const InFlatComponent = ({ flat }: Props) => {
  let { tenants, joinId, name } = flat;

  return (
    <div className={styles.FlatComponent}>
      <div className={styles.InFlatHeading}>Flat: {name}</div>
      <Flex className={styles.FlatJoinCode} justify="space-between" align="center">
        Join Code: {joinId} 
        <div>
          <CopyButton copyText={joinId} />
        </div>
      </Flex>
      <div className={styles.FlatMatesList}>
        <div className={styles.FlatMatesHeading}>Flatmates:</div>
        <div className={styles.FlatMates}>
          {tenants.map((tenant) => (
            <div key={tenant} className={styles.FlatMate}>
              {tenant}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InFlatComponent;
