import { NavbarMenuItem } from "@heroui/react";
import { NavbarMenu } from "@heroui/react";

export default function NavBarMobile() {
  return (
    <NavbarMenu
      className={`z-30 ${isMenuOpen ? "menuOpen" : "menuClose"}`}
      onClick={router.refresh}
    >
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
            className="w-full link-underline"
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
  );
}
