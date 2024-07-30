import Dashboard from "@/components/Dashboard/Dashboard";
import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  return <div>{session ? <Dashboard /> : ""}</div>;
}
