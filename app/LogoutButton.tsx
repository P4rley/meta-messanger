"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-white"
    >
      Sign Out
    </button>
  );
};
export default LogoutButton;
