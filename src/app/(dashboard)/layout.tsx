import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "@/components/Providers/ThemeProvider";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
