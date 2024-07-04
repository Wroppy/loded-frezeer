"use client";

import { Button } from '@mantine/core'
import React from 'react'

type Props = {}

const LogOutButton = (props: Props) => {
  const logout = () => {
    console.log("Log out");
  };
  return (
    <Button onClick={logout} color="red">
      Log out
    </Button>

  )
}

export default LogOutButton