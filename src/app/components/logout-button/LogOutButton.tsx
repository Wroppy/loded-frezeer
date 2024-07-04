"use client";

import { Button } from "@mantine/core";
import { signOut } from "next-auth/react";
import React from "react";

type Props = { disabled: boolean };

const LogOutButton = ({ disabled }: Props) => {
  const logout = async () => {
    console.log("Log out");
    await signOut({callbackUrl: "/auth/signin"});
  };

  return (
    <Button disabled={disabled} onClick={logout} color="red">
      Log out
    </Button>
  );
};

export default LogOutButton;
