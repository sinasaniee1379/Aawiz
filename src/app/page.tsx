import Button from "@/components/Button";
import { PAGES } from "@/constants/links";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[calc(100vh-32px)] w-full bg-[linear-gradient(154deg,white_50%,#1e40af_50%)] items-center justify-center flex-col flex">
      <div className="bg-white/30 backdrop-blur-md border border-white/40 w-1/3 shadow-2xl rounded-2xl p-8 max-w-sm">
        <h2 className="text-xl font-bold">Welcome</h2>
        <div className="flex flex-col gap-4 mt-6 text-white">
          <Button type="button">
            <Link href={PAGES.login}>Login</Link>
          </Button>
          <Button type="button">
            <Link href={PAGES.signUp}>Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
