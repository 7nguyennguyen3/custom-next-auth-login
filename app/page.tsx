import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-1">Home</h1>
      <Link href="/admin" className={buttonVariants()}>
        Go To Admin
      </Link>

      {session && (
        <div>
          <h2>Client Session</h2>
          <User />
          <h2>User Session</h2>
          {JSON.stringify(session)}
        </div>
      )}
    </div>
  );
};

export default Home;
