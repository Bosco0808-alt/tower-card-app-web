"use client";

import { useAuth } from "@/contexts/authContext";
import Link from "next/link";

export default function Game() {
  const { currentUser } = useAuth();
  return (
    <>
      <span className="h2 m-2">
        {currentUser?.displayName
          ? `Hello ${currentUser?.displayName}`
          : currentUser?.email
          ? `Hello ${currentUser?.email}`
          : "Hello guest"}
      </span>
      <br />
      <Link href="#" className="btn btn-primary m-2">
        Start PvP game
      </Link>
      <br />
      <Link href="#" className="btn btn-secondary m-2">
        Start PvE game
      </Link>
    </>
  );
}
