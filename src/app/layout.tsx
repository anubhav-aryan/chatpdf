import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import Provider from "@/components/ui/Provider";
import {Toaster} from 'react-hot-toast';
 
export const metadata = {
  title: 'Chatpdf',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <Provider>
      <html lang="en">
        <body>{children}</body>
      </html>
      <Toaster />
      </Provider>
    </ClerkProvider>
  )
}