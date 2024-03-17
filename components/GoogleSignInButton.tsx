import { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const GoogleSignInButton = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn("google", { callbackUrl: "http://localhost:3000/admin" });
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      disabled={isLoading}
      onClick={loginWithGoogle}
      className="w-full mb-2"
    >
      {!isLoading}
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
