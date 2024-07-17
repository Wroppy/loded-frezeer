import React from "react";

type Props = {
  params: {
    user: string;
  };
};

const page = ({ params }: Props) => {
  const targetUser = params.user.replace("-", "@");
  
  return <div>{targetUser}</div>;
};

export default page;