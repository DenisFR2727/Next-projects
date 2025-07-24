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
import Image from "next/image";
import NavLink from "./nav-link";
import "./header-main.scss";

export default function HeaderMain() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
              <span className="logo-nav">Funny Shop</span>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          <NavbarBrand>
            <Link href="/" className="font-bold text-inherit">
              <Image
                style={{ maxWidth: "30px !important" }}
                src="/favicon.png"
                alt=""
                width={30}
                height={30}
              />
            </Link>
          </NavbarBrand>
          <NavbarItem className="lg:flex ">
            <NavLink href="/">Home</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/products">Products</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/about">About</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/cart">Cart</NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex ">
            <Link href="#">
              <span className="header_login-nav">Login</span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile menu */}
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
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
