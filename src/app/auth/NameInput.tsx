import { TextInput } from "@mantine/core";
import React from "react";

type Props = {};

const NameInput = (props: Props) => {
  return (
    <TextInput
      minLength={3}
      label="Name"
      placeholder="Your name"
      required
      name="name"
    />
  );
};

export default NameInput;
