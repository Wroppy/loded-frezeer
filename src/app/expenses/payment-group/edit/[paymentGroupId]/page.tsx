import ManagePaymentGroupCard from "@/app/components/manage-payment-group-card/ManagePaymentGroupCard";
import PaymentGroup from "@/app/types/PaymentGroup";
import { postFetch } from "@/app/utils/postFetch";
import { getServerSession } from "next-auth";
import React, { Suspense } from "react";

type Props = { params: { paymentGroupId: string } };

const page = async ({ params }: Props) => {
  const email = (await getServerSession())!.user!.email!;

  const res = (await postFetch("/api/payment-group/get", {
    email,
  })) as { groups: PaymentGroup[]; error?: string };

  if (res.error) {
    return <div>Payment Group Not Found</div>;
  }

  console.log(res);

  let paymentGroup;
  try {
    // Gets the payment group with the id from the URL
    paymentGroup = res.groups.find(
      (group) => group.id === params.paymentGroupId
    ) as PaymentGroup;
  } catch (e) {
    return <div>Payment Group Not Found</div>;
  }

  const userRes = await postFetch("/api/get-users/", {
    email,
  });

  if (userRes.error) {
    return <div>Failed to get users</div>;
  }

  const users = userRes.users;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ManagePaymentGroupCard
        title={"Edit Payment Group"}
        buttonText="Save Changes"
        redirectUrl="/expenses/payment-group"
        fetchUrl="/api/payment-group/edit"
        users={users}
        paymentGroup={paymentGroup}
        email={email}
      />
    </Suspense>
  );
};

export default page;
