"use server";

import { signIn, signOut } from "@/auth";

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
};

export const signout = async () => {
  await signOut({ redirectTo: "/" });
};
