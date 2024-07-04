import { Session } from "next-auth";
import { redirect } from "next/navigation";

const checkAuth = (session: Session | null) => {
  if (!session) {
    redirect("/auth/signin");
  }
};

export { checkAuth };
