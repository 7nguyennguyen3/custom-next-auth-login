"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const SignOutButton = () => {
  const handleClick = async () => {
    await signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/sign-in`,
    });
  };

  return (
    <Button variant="destructive" onClick={handleClick}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
