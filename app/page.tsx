"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/authContext";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { userLoggedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (userLoggedIn) {
      router.push("/game");
    }
  }, []);
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
