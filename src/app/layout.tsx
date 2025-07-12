import * as React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarNextUI from "@/components/layouts/NavbarWithNextUI";
import PageLine from "@/components/UI/pageLine";
const inter = Inter({ subsets: ["latin"] });
import { NextUIProvider } from "@nextui-org/system";

export const metadata: Metadata = {
  title: "SAKOAI Agency",
  description: "Mohammad Murad Sako, AI Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <PageLine />
          <NavBarNextUI />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
