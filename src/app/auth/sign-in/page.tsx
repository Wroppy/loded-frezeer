"use client";

import React, { FormEvent } from "react";
import AuthComponent from "../AuthComponent/AuthComponent";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";

type Props = {};

const SignInPage = (props: Props) => {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Gets the email and password from the form
    const email = (event.target as any).email.value as string;
    const password = (event.target as any).password.value as string

    
  };

  return (
    <AuthComponent heading="Sign In" onSubmit={onSubmit}>
      <EmailInput />
      <PasswordInput />
    </AuthComponent>
  );
};

export default SignInPage;
