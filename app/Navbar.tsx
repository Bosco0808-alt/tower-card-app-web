"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/authContext";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { userLoggedIn } = useAuth();
  const router = useRouter();
  const handleClick = async () => {
    const result = await Swal.fire({
      title: "Confirmation",
      icon: "warning",
      text: "Are you sure you want to log out?",
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "No!",
      confirmButtonText: "Yes, I want to log out.",
    });
    if (result.isConfirmed) {
      try {
        await signOut(auth);
        router.push("/");
      } catch (err) {
        console.log(err);
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: JSON.stringify(err),
        });
      }
    }
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active navbar-brand">
          <Link className="nav-link" href={userLoggedIn ? "/game" : "/"}>
            Home
          </Link>
        </li>
        {userLoggedIn ? (
          <li className="nav-item active m-2">
            <button className="btn btn-danger" onClick={handleClick}>
              Log out
            </button>
          </li>
        ) : (
          <>
            <li className="nav-item active m-2">
              <Link className="nav-link" href="/signup">
                Sign up
              </Link>
            </li>
            <li className="nav-item active m-2">
              <Link className="nav-link" href="/login">
                Log In
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
