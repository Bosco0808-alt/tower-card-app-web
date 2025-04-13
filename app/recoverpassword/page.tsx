"use client";

import { useAuth } from "@/contexts/authContext";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const RecoverPassword = () => {
  const { userLoggedIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (userLoggedIn) {
      router.push("/game");
    }
  }, [userLoggedIn]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    // Add later
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="m-2">Email address</label>
      <input
        className="form-control m-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      <button type="submit" className="btn btn-primary m-2">
        Reset password
      </button>
    </form>
  );
};

export default RecoverPassword;
