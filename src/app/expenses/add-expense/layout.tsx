import React, { ReactNode, Suspense } from "react";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return <Suspense fallback={<div>loading...</div>}>{children}</Suspense>;
};

export default layout;
