import CredentialsProvider from "next-auth/providers/credentials";
import { comparePassword } from "@/utils/hashPassword";
import userModel from "@/models/userModel";
import { connectMongo } from "@/utils/connectMongo";
import NextAuth from "next-auth";

export const nextAuthAdmin = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectMongo(); // Connect to MongoDB

        const { email, password } = credentials;

        const user = await userModel.findOne({ email });

        if (!user) {
          throw new Error("User not found");
        }

        const isValidPassword = await comparePassword(password, user.password);

        if (!isValidPassword) {
          throw new Error("Invalid password");
        }

        return { email: user.email }; // Return the user's email to create a session
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    jwt: true,
    maxAge: 2 * 24 * 60 * 60, // 2 days
  },
  jwt: {
    secret: process.env.SECRET,
  },
  callbacks: {},
};

export default NextAuth(nextAuthAdmin);
