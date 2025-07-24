"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  Link as HeroLink,
  NavbarMenuToggle,
} from "@heroui/react";
import Link from "next/link";

import "./header-main.scss";
import { useRouter } from "next/navigation";

export default function HeaderMain() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const menuItems = [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Login", href: "#" },
    { label: "Sign Up", href: "#" },
  ];

  return (
    <header>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBordered
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent
          className="sm:hidden justify-center pr-3"
          justify="center"
        >
          <NavbarBrand>
            <Link
              href="/"
              className="font-bold text-inherit"
              onClick={() => setIsMenuOpen(false)}
            >
              Funny Shop
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          <NavbarBrand>
            <Link href="/" className="font-bold text-inherit">
              Funny Shop
            </Link>
          </NavbarBrand>
          <NavbarItem>
            <Link href="/products">Products</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about">About</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <Link href="#" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              onPaste={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile menu */}
        <NavbarMenu className="z-30" onClick={router.refresh}>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={index}
              onClick={() => {
                setIsMenuOpen(false);
                router.push(item.href);
              }}
            >
              <HeroLink
                href={item.href}
                className="w-full"
                color={item.label === "Sign Up" ? "primary" : "foreground"}
                size="lg"
                as={Link}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </HeroLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
}
