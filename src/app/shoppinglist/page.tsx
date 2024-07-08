import { getServerSession } from "next-auth";
import React from "react";
import { checkAuth } from "../utils/checkAuth";
import ShoppingListPage from "./shoppingListPage";
import { postFetch } from "../utils/postFetch";
import { ShoppingListPageProps } from "../types/ShoppingListPageProps";

type Props = {};

const page = async (props: Props) => {
  // Makes sure the user is logged in
  const session = await getServerSession();

  // Checks that the user is logged in
  checkAuth(session);
  console.log({ email: session!.user!.email });
  let pageProps = await postFetch("/api/shoppinglist/get-page-props", {
    email: session!.user!.email!,
  });

  return <ShoppingListPage {...pageProps} />;
};

export default page;
