"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { signIn } from "next-auth/react";

export default function Navbar() {
  return (
    <div className="mt-3 border-b">
      <div className="lg:container p-3 flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <h1 className="font-bold text-2xl">WorkFlow</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button onClick={() => signIn()}>Login</Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
