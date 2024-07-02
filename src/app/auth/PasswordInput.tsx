import React from "react";
import { PasswordInput as TextInput } from "@mantine/core";

type Props = {};

const PasswordInput = (props: Props) => {
  return (
    <TextInput
      minLength={3}
      label="Password"
      required
      placeholder="Your password"
      name="password"
    />
  );
};

export default PasswordInput;
