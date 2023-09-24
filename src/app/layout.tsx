import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/Provider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Chatpdf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      
        <html lang="en">
          <body>{children}</body>
          <Toaster />
        </html>
      
    </ClerkProvider>
  );
}
