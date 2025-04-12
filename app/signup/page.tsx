"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useAuth } from "@/contexts/authContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import React from "react";

export default function SignUp() {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isSigningIn, setIsSigningIn] = useState(false);
  useEffect(() => {
    console.log(userLoggedIn);
    if (userLoggedIn) {
      router.push("/game");
    }
  }, [isSigningIn]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        title: "Error!",
        text: "Fill in both the email and the password fields!",
        icon: "error",
        confirmButtonText: "Ok",
        timer: 3000,
      });
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        title: "Error!",
        text: "Invalid email!",
        icon: "error",
        confirmButtonText: "Ok",
        timer: 3000,
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        title: "Error!",
        text: "Password length must be over 6 characters long!",
        icon: "error",
        confirmButtonText: "Ok",
        timer: 3000,
      });
      return;
    }

    if (!isSigningIn) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setIsSigningIn(true);
      } catch (err: any) {
        console.log("Error: " + err.code + err.message);
        Swal.fire({
          title: "Error!",
          text: "Error: " + err.code + err.message,
          icon: "error",
          confirmButtonText: "Ok",
          timer: 6000,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="m-2">Sign Up</h2>
      <label className="m-2">Email address</label>
      <input
        className="form-control m-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <small className="form-text text-muted m-2">
        We'll never share your email with anyone else.
      </small>
      <br />
      <label className="m-2">Password</label>
      <input
        className="form-control m-2"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary m-2" type="submit">
        Sign Up
      </button>
    </form>
  );
}
