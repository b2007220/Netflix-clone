"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import GoogleIcon from "../../public/google.svg";
import Image from "next/image";

export default function GoogleSignInButton() {
  return (
    <Button variant="outline" size="icon" onClick={() => signIn("google")}>
      <Image src={GoogleIcon} alt="google icon" className="w-6 h-6" />
    </Button>
  );
}
