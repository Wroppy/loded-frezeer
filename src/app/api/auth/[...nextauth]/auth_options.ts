import { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
  providers: [],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
};
