"use client";

import React, { useState, useEffect, useContext } from "react";
import { auth } from "@/app/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContext = React.createContext<{
  currentUser: User | null | undefined;
  userLoggedIn: boolean;
  loading: boolean;
}>({
  currentUser: null,
  userLoggedIn: false,
  loading: true,
});

export function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, initializeUser);
    return unsub;
  }, []);

  async function initializeUser(user: User | null) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
