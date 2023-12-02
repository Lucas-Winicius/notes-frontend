import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creating a note",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
