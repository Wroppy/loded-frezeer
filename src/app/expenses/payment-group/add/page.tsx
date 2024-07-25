import ManagePaymentGroupCard from "@/app/components/manage-payment-group-card/ManagePaymentGroupCard";
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

  const url = "/api/payment-group/add";
  const redirectUrl = "/expenses/payment-group";

  return (
    <ManagePaymentGroupCard
      email={email}
      title="Create Payment Group"
      buttonText="Create"
      users={users}
      fetchUrl={url}
      redirectUrl={redirectUrl}
    />
  );
};

export default page;
