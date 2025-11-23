import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="h-screen w-full bg-[linear-gradient(115deg,white_50%,#1e40af_50%)] items-center justify-center flex">
      {/* <div className="sticky top-0 w-full"></div> */}
      <div className="bg-white/30 backdrop-blur-md border border-white/40 w-1/3 shadow-2xl rounded-2xl p-8">
        <h2>Welcome</h2>
        <div className="flex flex-col gap-4 mt-6 text-white">
          <Button type="button" title="Sign-up" />
          <Button type="button" title="Login" />
        </div>
      </div>
    </div>
  );
}
