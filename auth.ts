import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";
import Twitter from "next-auth/providers/twitter";

const authOptions = {
  providers: [GitHub, Google, Facebook, Twitter],
  pages: {
    signIn: "/login",
    signOut: "/signout",
    error: "/error",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
