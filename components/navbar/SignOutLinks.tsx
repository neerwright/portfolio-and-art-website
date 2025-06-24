"use client";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";
import Link from "next/link";

function SignOutLinks({ textColor }: { textColor: string }) {
  const handleLogout = () => {
    toast("Logout successfull");
  };

  return (
    <SignOutButton>
      <Link
        href="/"
        className={`w-full text-left ${textColor}`}
        onClick={handleLogout}
      >
        Logout
      </Link>
    </SignOutButton>
  );
}
export default SignOutLinks;
