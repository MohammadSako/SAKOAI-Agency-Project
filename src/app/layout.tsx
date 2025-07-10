import * as React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layouts/navbar";
import NavBarNextUI from "@/components/layouts/NavbarWithNextUI";
import Footer from "@/components/layouts/footer";
import PageLine from "@/components/UI/pageLine";
const inter = Inter({ subsets: ["latin"] });
import { NextUIProvider } from "@nextui-org/system";

export const metadata: Metadata = {
  title: "Mohammad Talal Murad",
  description: "Mohammad Sako, Front End Developer",
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
          {/* <NavBar /> */}
          <NavBarNextUI />
          {children}
          {/* <Footer /> */}
        </NextUIProvider>
      </body>
    </html>
  );
}
