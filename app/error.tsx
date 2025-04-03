"use client";

import Link from "next/link";

export default function Error() {
  return (
    <>
      <h1>Error!</h1>
      <Link href={"/"} className="btn btn-primary">
        Back to home
      </Link>
    </>
  );
}
