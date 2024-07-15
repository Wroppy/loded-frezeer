import { Button, Card, Flex } from "@mantine/core";
import React from "react";
import styles from "./edit-chore.module.scss";
import Link from "next/link";

type Props = { id: string };

const ChoreNotFoundPage = ({ id }: Props) => {
  return (
    <Card className={styles.ChoreNotFound}>
      <h2>Chore not found</h2>
      <Flex
        gap="md"
        direction="column"
        style={{ flexGrow: 1 }}
        justify={"center"}
        align={"center"}
      >
        <div>Chore with id &quot;{id}&quot; not found</div>
        <Button component={Link} href="/chores">
          Go back to chores?
        </Button>
      </Flex>
    </Card>
  );
};

export default ChoreNotFoundPage;
