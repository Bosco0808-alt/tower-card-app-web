import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className="m-2">Tower Defence Card Game</h1>
      <Link className="btn btn-primary m-2" href={"/signup"}>
        Sign Up
      </Link>
      <br />
      <Link className="btn btn-danger m-2" href={"/login"}>
        Log In
      </Link>
      <br />
      <Link className="btn btn-secondary m-2" href={"/game"}>
        Play as guest
      </Link>
    </>
  );
}
