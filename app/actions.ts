"use server";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

export async function createUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return JSON.stringify(userCredential.user);
  } catch (error: any) {
    console.error("Error creating user:", error.code, error.message);
    return JSON.stringify({
      error: "Error creating user: " + error.code + " " + error.message,
    });
  }
}

export async function logIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return JSON.stringify(userCredential.user);
  } catch (error: any) {
    console.error("Error logging in user:", error.code, error.message);
    return JSON.stringify({
      error: "Error logging in user: " + error.code + " " + error.message,
    });
  }
}
