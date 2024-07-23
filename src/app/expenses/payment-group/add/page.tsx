import ManagePaymentGroupCard from "@/app/components/manage-payment-group-card/ManagePaymentGroupCard";
import ClientUser from "@/app/types/ClientUser";
import { postFetch } from "@/app/utils/postFetch";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession();

  const email = session!.user!.email!;

  const res = await postFetch("/api/get-users", { email });
  if (res.error) {
    redirect("/flatmates");
  }

  const { users } = res;

  const url = "";
  const redirectUrl = "/expenses/payment-group";

  return (
    <ManagePaymentGroupCard
      title="Create Payment Group"
      buttonText="Create"
      users={users}
      fetchUrl={url}
      redirectUrl={redirectUrl}
    />
  );
};

export default page;
