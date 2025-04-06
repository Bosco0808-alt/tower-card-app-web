"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "firebase/auth";

export default function SignUpClient({
  createUserAction,
}: {
  createUserAction: (email: string, password: string) => Promise<string>;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    const actionOut = await createUserAction(email, password); // Call the server action
    const user = JSON.parse(actionOut);
    if (JSON.stringify(user) === "{}") {
      alert("There was an error creating the user, please try again later.");
    } else {
      alert("Signed up successfully!");
      router.push("/game");
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
