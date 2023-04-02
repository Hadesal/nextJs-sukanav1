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
        console.log(response);
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
  session: { strategy: "jwt" },
};
export default NextAuth(nextAuthAdmin);
