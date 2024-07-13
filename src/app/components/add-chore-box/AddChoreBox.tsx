import React from "react";
import ChoreBox from "../chore-box/ChoreBox";
import styles from "./add-chore-box.module.scss";
import { IconTablePlus } from "@tabler/icons-react";
import { rem } from "@mantine/core";

type Props = {};

const AddChoreBox = (props: Props) => {
  return (
    <ChoreBox className={styles.AddChoreBox} dotted>
      <IconTablePlus style={{ width: rem(80), height: rem(80) }} stroke={1.5} />
      <div>Add a new chore</div>
    </ChoreBox>
  );
};

export default AddChoreBox;
