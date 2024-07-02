import { TextInput } from "@mantine/core";
import React from "react";

type Props = {};

const EmailInput = (props: Props) => {
  return (
    <TextInput
      minLength={5}
      label="Email"
      placeholder="Your email"
      required
      name="email"
    />
  );
};

export default EmailInput;
