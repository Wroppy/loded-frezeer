import React, { ReactNode, Suspense } from "react";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default layout;
