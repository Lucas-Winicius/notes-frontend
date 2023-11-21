import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-800 w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
