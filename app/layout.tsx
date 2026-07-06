import Navbar from "@/components/layout/Navbar";
import "./globals.css";

import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";



export const metadata: Metadata = {
  title: "Matrimonial",
  description: "Premium Matrimonial Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}