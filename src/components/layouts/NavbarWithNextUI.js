"use client";

import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

export default function NavBarNextUI() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    { name: "Home", href: "#home", current: true },
    { name: "Our Services", href: "#services", current: false },
    { name: "Social Proof", href: "#social", current: false },
    { name: "Call-to-Action", href: "#call", current: false },
    { name: "FAQs", href: "#faqs", current: false },
    { name: "Contact", href: "#contact", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="mt-6"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h1 className="text-center text-black text-3xl font-semibold font-sans tracking-tight">
            SAKO
            <span className="text-[#fd4c00]">A</span>
            <span className="text-[#294cfc]">I</span>{" "}
            <span className="font-light">Agency</span>
          </h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navigation.map((item) => (
          <NavbarItem key={item.name}>
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              aria-current={item.current ? "page" : undefined}
              className={`lg:text-lg text-lg font-bold font-sans tracking-tight ${
                activeLink === item.href
                  ? `${
                      scrolled
                        ? "text-gray-700 border-b-4 border-gray-700 shadow-lg"
                        : "text-sky-700 border-b-4 border-sky-600/90 shadow-lg"
                    }`
                  : `${scrolled ? "text-gray-500" : "text-gray-600"}`
              }`}
            >
              {item.name}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="mt-6">
        {navigation.map((item) => (
          <NavbarMenuItem key={item.name}>
            <a
              href={item.href}
              onClick={() => {
                setActiveLink(item.href);
                setIsMenuOpen(false);
              }}
              className={classNames(
                activeLink === item.href
                  ? "bg-sky-600 text-white"
                  : "text-gray-700 hover:bg-sky-600 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
