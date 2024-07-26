import PaymentGroupViewer from "@/app/components/payment-group-viewer/PaymentGroupViewer";
import React from "react";
import styles from "./payment-group-page.module.scss";
import PaymentGroupPageHeader from "./PaymentGroupPageHeader";

type Props = {};

const page = async (props: Props) => {
  return (
    <div className={styles.PaymentGroupPage}>
      <PaymentGroupPageHeader />
      <PaymentGroupViewer />
    </div>
  );
};

export default page;
