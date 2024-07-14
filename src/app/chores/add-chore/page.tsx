import React from "react";
import AddChorePage from "./AddChorePage";
import { getServerSession } from "next-auth";
import { postFetch } from "@/app/utils/postFetch";
import { checkAuth } from "@/app/utils/checkAuth";
import ClientUser from "@/app/types/ClientUser";
import { redirect } from "next/navigation";

type Props = {};

type ResponseType = {
  users: ClientUser[];
  error: string;
};

const page = async (props: Props) => {
  const session = await getServerSession();

  checkAuth(session);

  // Gets the users
  const {users, error} = await postFetch("/api/get-users", {
    email: session!.user!.email,
  }) as ResponseType;
  
  // Checks that the user is in a flat
  if (error) {
    redirect("/flatmates");
  } 

  return (
    <>
      <AddChorePage users={users} />
    </>
  );
};

export default page;
