import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (session?.user) {
    return (
      <h2 className="text-2xl">
        Admin Page - welcome back {session?.user.username || session.user.name}{" "}
      </h2>
    );
  }

  return (
    <div>
      <h2 className="text-2xl">Please login to see this admin page</h2>
    </div>
  );
};

export default AdminPage;
