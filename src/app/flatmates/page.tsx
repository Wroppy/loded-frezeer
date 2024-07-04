import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./../api/auth/[...nextauth]/auth_options";

type Props = {};

const FlatMatesPage = async (props: Props) => {
  const session = await getServerSession(authOptions);

  console.log(session)

  return <div>page</div>;
};

export default FlatMatesPage;
