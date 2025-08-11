"use server";

import { signIn, signOut } from "@/auth";

export const login = async (provider: string) => {
  try {
    await signIn(provider, { redirectTo: "/dashboard" });
  } catch (error) {
    console.error("Error logging in: ", error);
    throw error;
  }
};

export const signout = async () => {
  try {
    await signOut({ redirectTo: "/" });
  } catch (error) {
    console.error("Error signing out: ", error);
    throw error;
  }
};
