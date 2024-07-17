import React from "react";

type Props = {
  params: {
    user: string;
  };
};

const page = ({ params }: Props) => {
  const { user: targetUser } = params;

  return <div>{targetUser}</div>;
};

export default page;