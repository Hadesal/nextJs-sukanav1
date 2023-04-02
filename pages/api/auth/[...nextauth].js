import CredentialsProvider from "next-auth/providers/credentials";
import { adminLogin } from "@/utils/fechtMethods";
import NextAuth from "next-auth";

export const nextAuthAdmin = {
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
          throw Error(response.message);
        }
        return isAdmin;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: { strategy: "jwt" },
  secret: process.env.SECRET,
  callbacks: {},
};
export default NextAuth(nextAuthAdmin);
