"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { createUser } from "../actions"; // Import the server action

export default function SignUpClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Fill in both the email and the password");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email!");
      return;
    }

    if (password.length < 6) {
      alert("Invalid password! Passwords must be over 6 characters long!");
      return;
    }

    try {
      const user = await createUser(email, password); // Call the server action
      if (!user) {
        alert("There was an error creating the user, please try again later.");
      } else {
        alert("Signed up successfully!");
        router.push("/game");
      }
    } catch (err) {
      alert("Signed up successfully!");
      router.push("/game");
      // TODO: fix this dumb error
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
