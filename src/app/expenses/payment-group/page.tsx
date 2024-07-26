import PaymentGroupViewer from "@/app/components/payment-group-viewer/PaymentGroupViewer";
import { getServerSession } from "next-auth";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  
  return <PaymentGroupViewer />;
};

export default page;
