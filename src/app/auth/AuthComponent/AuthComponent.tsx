"use client";

import { Button, Card, Flex } from "@mantine/core";
import { FormEvent, ReactNode } from "react";
import styles from "./auth-component.module.scss";

type Props = {
  onSubmit: (event: FormEvent) => void;
  children: ReactNode;
  heading: string;
};

const AuthComponent = ({ onSubmit, children, heading }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <Card shadow="lg" className={styles.AuthComponent}>
        <div className={styles.Heading}>{heading}</div>
        {children}
        <Flex justify="flex-end" className={styles.ButtonContainer}>
          <Button type="submit">Submit</Button>
        </Flex>
      </Card>
    </form>
  );
};

export default AuthComponent;
