import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Navbar = async () => {
  const session = await getServerSession(options);
  // if (!session) {
  //   redirect("/api/auth/signin?callbackurl=/member");
  // }
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <Link href="/" className="text-white text-xl">
          Next <span className="text-blue-500 font-bold">Auth</span>
        </Link>

        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/createuser">Create User</Link>
          <Link href="/clentmember">Client Member</Link>
          <Link href="/member">member</Link>
          <Link href="/public">public</Link>
          {session ? (
            <Link
              className="bg-red-400 px-2 py-1 text-center no-underline	 rounded text-white"
              href="/api/auth/signout?callbackurl=/"
            >
              Logout
            </Link>
          ) : (
            <Link
              className="bg-blue-400 px-2 py-1 text-center no-underline	 rounded text-white"
              href="/api/auth/signin?callbackurl=/"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
