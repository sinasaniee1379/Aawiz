import Button from "@/components/Button";
import { PAGES } from "@/constants/links";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
            h-screen w-full 
            bg-[linear-gradient(154deg,white_50%,#1e40af_50%)]
            dark:bg-[linear-gradient(154deg,#0f172a_50%,#1e3a8a_50%)]
            flex items-center justify-center flex-col
          ">
      <div
        className="
          bg-white/30 dark:bg-black/30
          backdrop-blur-md 
          border border-white/40 dark:border-white/10
          w-1/3 max-w-sm
          shadow-2xl rounded-2xl p-8
        ">
        <h2 className="text-xl font-bold dark:text-white">Welcome</h2>

        <div className="flex flex-col gap-4 mt-6 text-white dark:text-gray-200">
          <Button type="button">
            <Link className="w-full" href={PAGES.login}>
              Login
            </Link>
          </Button>

          <Button type="button">
            <Link className="w-full" href={PAGES.signUp}>
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
