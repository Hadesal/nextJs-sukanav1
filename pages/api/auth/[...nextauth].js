import CredentialsProvider from "next-auth/providers/credentials";
import { adminLogin } from "@/utils/fechtMethods";
import NextAuth from "next-auth";

export const nextAuthAdmin = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await adminLogin(credentials);
        const isAdmin = response.isAdmin;
        if (!isAdmin || isAdmin === undefined) {
          return response;
        }
        return isAdmin;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
};
export default NextAuth(nextAuthAdmin);
