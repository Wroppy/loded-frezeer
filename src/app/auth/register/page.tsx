"use client";

import React, { FormEvent } from "react";
import AuthComponent from "../AuthComponent/AuthComponent";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import NameInput from "../NameInput";

type Props = {};

const RegisterPage = (props: Props) => {
  const onSubmit = (event: FormEvent) => {};
  return (
    <AuthComponent heading="Register" onSubmit={onSubmit}>
      <NameInput />
      <EmailInput />
      <PasswordInput />
    </AuthComponent>
  );
};

export default RegisterPage;
