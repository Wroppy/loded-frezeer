"use client";

import React, { FormEvent } from "react";
import AuthComponent from "../AuthComponent/AuthComponent";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";

type Props = {};

const SignInPage = (props: Props) => {
  const onSubmit = (event: FormEvent) => {};

  return (
    <AuthComponent heading="Sign In" onSubmit={onSubmit}>
      <EmailInput />
      <PasswordInput />
    </AuthComponent>
  );
};

export default SignInPage;
