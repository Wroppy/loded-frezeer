"use client";

import React, { FormEvent } from "react";
import AuthComponent from "../AuthComponent/AuthComponent";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import NameInput from "../NameInput";
import { postFetch } from "@/app/utils/postFetch";
import { showErrorMessage } from "@/app/utils/showErrorMessage";
import { RegisterResponse } from "@/app/types/RegisterResponse";
import { signIn } from "next-auth/react";
import Link from "next/link";

const GoToSignInPage = () => {
  return (
    <div>
      Already have an account? Sign in {" "}
      <Link href="/auth/signin">here</Link>
    </div>
  );
};

type Props = {};

const RegisterPage = (props: Props) => {
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Gets the name, email and password from the form
    const name = (event.target as any).name.value as string;
    const email = (event.target as any).email.value as string;
    const password = (event.target as any).password.value as string;

    // Registers the user using credentials
    const result = (await postFetch("/api/register", {
      name,
      email,
      password,
    })) as RegisterResponse;

    if (!result) {
      showErrorMessage("An error occurred", "Please try again.");
      return;
    }

    if (result.error) {
      showErrorMessage(result.error, "Please try again.");
      return;
    }

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  };

  return (
    <AuthComponent
      RedirComponent={<GoToSignInPage />}
      buttonText="register"
      heading="Register"
      onSubmit={onSubmit}
    >
      <NameInput />
      <EmailInput />
      <PasswordInput />
    </AuthComponent>
  );
};

export default RegisterPage;
