import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import logo from "@/public/Elk Logo.png";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import SignOutButton from "./SignOutButton";

const NavBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-slate-200 py-1.5 border-b border-s-zinc-300 fixed w-full z-10 top-0 p-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" width={70} />
        </Link>
        {session?.user ? (
          <SignOutButton />
        ) : (
          <Link className={buttonVariants()} href="/sign-in">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
