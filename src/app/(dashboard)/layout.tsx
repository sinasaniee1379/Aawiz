import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "@/components/Providers/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwich";

export const metadata: Metadata = {
  title: "Dashboard Website",
  description: "Welcome to my Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 ">
        <Providers>
          <div className="absolute top-0 w-full bg-white dark:bg-gray-900 py-4 px-[5%] shadow-xl">
            <ThemeSwitcher />
          </div>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
