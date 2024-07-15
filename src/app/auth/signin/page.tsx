"use client";

import React, { FormEvent } from "react";
import AuthComponent from "../AuthComponent/AuthComponent";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import { signIn } from "next-auth/react";
import { showErrorMessage } from "@/app/utils/showErrorMessage";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

const GoToRegisterPage = () => {
  return (
    <div>
      Don&apos;t have an account? Register{" "}
      <Link href="/auth/register">here</Link>
    </div>
  );
};

const SignInPage = (props: Props) => {
  const router = useRouter();
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Gets the email and password from the form
    const email = (event.target as any).email.value as string;
    const password = (event.target as any).password.value as string;

    // Signs in the user using credentials
    let result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result!.ok) {
      showErrorMessage("Invalid Credentials", "Please try again.");
    }

    router.push("/");
  };

  return (
    <AuthComponent
      RedirComponent={<GoToRegisterPage />}
      buttonText="sign in "
      heading="Sign In"
      onSubmit={onSubmit}
    >
      <EmailInput />
      <PasswordInput />
    </AuthComponent>
  );
};

export default SignInPage;
