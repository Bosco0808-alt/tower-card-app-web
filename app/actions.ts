"use server";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export async function createUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    console.error("Error creating user:", error.code, error.message);
    return undefined;
  }
}
