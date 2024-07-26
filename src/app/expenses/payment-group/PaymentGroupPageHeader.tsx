import { Button, Flex } from "@mantine/core";
import Link from "next/link";
import React from "react";

type Props = {};

const PaymentGroupPageHeader = (props: Props) => {
  return (
    <Flex justify={"flex-end"}>
      <Button
        component={Link}
        href="/expenses/payment-group/add"
        variant="outline"
      >
        Add Payment Group
      </Button>
    </Flex>
  );
};

export default PaymentGroupPageHeader;
