"use client";

import React, { FormEvent } from "react";
import AuthComponent from "../AuthComponent/AuthComponent";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import NameInput from "../NameInput";

type Props = {};

const RegisterPage = (props: Props) => {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Gets the name, email and password from the form
    const name = (event.target as any).name.value as string;
    const email = (event.target as any).email.value as string;
    const password = (event.target as any).password.value as string;
  };

  return (
    <AuthComponent heading="Register" onSubmit={onSubmit}>
      <NameInput />
      <EmailInput />
      <PasswordInput />
    </AuthComponent>
  );
};

export default RegisterPage;
