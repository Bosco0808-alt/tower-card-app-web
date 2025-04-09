"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <h2 className="m-2">Log In</h2>
      <label className="m-2">Email address</label>
      <input
        className="form-control m-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <small className="form-text text-muted m-2">
        We'll never share your email with anyone else.
      </small>
      <br />
      <label className="m-2">Password</label>
      <input
        className="form-control m-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button className="btn btn-primary m-2" type="submit">
        Log In
      </button>
    </form>
  );
}
