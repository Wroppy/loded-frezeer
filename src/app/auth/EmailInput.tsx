import { TextInput } from "@mantine/core";
import React from "react";

type Props = {};

const EmailInput = (props: Props) => {
  return (
    <TextInput
      label="Email"
      placeholder="Your email"
      required
      name="email"
      title="Please enter a valid email address"
      type="email"
    />
  );
};

export default EmailInput;
