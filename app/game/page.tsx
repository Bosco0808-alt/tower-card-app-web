"use client";

import { useAuth } from "@/contexts/authContext";

export default function Game() {
  const { currentUser } = useAuth();
  return (
    <span className="h2 m-2">
      {currentUser?.displayName
        ? currentUser?.displayName
        : currentUser?.email
        ? currentUser?.email
        : "Guest"}
    </span>
  );
}
