"use client";

import { useAuth } from "@/contexts/authContext";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

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
      {currentUser?.email ? (
        ""
      ) : (
        <>
          <Link href="/signup" className="btn btn-primary m-2">
            Sign Up
          </Link>
          <br />
          <Link href="/login" className="btn btn-secondary m-2">
            Log In
          </Link>
          <br />
        </>
      )}
      <Link href="/game/1?type=0" className="btn btn-danger m-2">
        Start PvP game
      </Link>
      <br />
      <Link href="/game/1?type=1" className="btn btn-dark m-2">
        Start PvE game
      </Link>
      {/* The below is used for testing only */}
      <br />
      <span>{currentUser?.uid}</span>
    </>
  );
}
