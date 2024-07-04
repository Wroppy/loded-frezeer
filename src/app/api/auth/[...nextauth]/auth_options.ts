import DatabaseManager from "@/app/database/DatabaseManager";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        const email = credentials?.email;
        const password = credentials?.password;

        // Checks if the email and password in the credentials object
        if (!email || !password) {
          return null;
        }

        // Checks if the user is in the database
        const db = new DatabaseManager();
        const isValid = await db.isUserValid(email, password);

        if (!isValid) {
          return null;
        }

        return await db.getUser(email)!;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
};
