"use client";

export default function SignUpClient() {
  return (
    <form>
      <h2 className="m-2">Sign Up</h2>
      <label className="m-2">Email address</label>
      <input className="form-control m-2"></input>
      <small className="form-text text-muted m-2">
        We'll never share your email with anyone else.
      </small>
      <br />
      <br />
      <label className="m-2">Password</label>
      <input className="form-control m-2"></input>
      <button className="btn btn-primary m-2">Sign Up</button>
    </form>
  );
}
