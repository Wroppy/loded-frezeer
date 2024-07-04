import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./../api/auth/[...nextauth]/auth_options";
import { checkAuth } from "../utils/checkAuth";
import { postFetch } from "../utils/postFetch";

type Props = {};

const FlatMatesPage = async (props: Props) => {
  const session = await getServerSession(authOptions);

  checkAuth(session);


  console.log(session)

  const flat = await postFetch("/api/flat/get-flat", { email: session!.user!.email });
  
  return <div>{JSON.stringify(flat)}</div>;
};

export default FlatMatesPage;
