"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "PRODUCT", href: "/products" },
  { label: "BLOG", href: "/blog" },
  { label: "ABOUT US", href: "/aboutus" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="z-50 absolute font-oswald w-full flex justify-center pt-6">
      <nav
        className="flex items-center justify-between w-full max-w-5xl h-[55px] px-5 rounded-[19px]"
        style={{
          background:
            "linear-gradient(90deg, #C21A9D 0%, #141315 10%, #000000 92%, rgba(235,0,255,0.59) 100%)",
        }}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/jbl_logo_nav.png"
            width={73}
            height={54}
            alt="Logo"
          />
        </Link>

        <div className="flex items-center gap-12">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm font-light tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-[#FF5A00]"
                    : "text-white hover:text-[#FF5A00]"
                }`}
              >
                {item.label}
                {isActive && (
                  <>
                    <span className="absolute -left-4 top-1/2 w-4 h-[2px] bg-[#FF5A00] rotate-[-45deg]" />
                    <span className="absolute -right-4 top-1/2 w-4 h-[2px] bg-[#FF5A00] rotate-[-45deg]" />
                  </>
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-5 text-white">
          <Search
            size={18}
            className="cursor-pointer hover:text-[#FF5A00] transition-colors"
          />
          <User
            size={18}
            className="cursor-pointer hover:text-[#FF5A00] transition-colors"
          />
          <Heart
            size={18}
            className="cursor-pointer hover:text-[#FF5A00] transition-colors"
          />
          <ShoppingCart
            size={18}
            className="cursor-pointer hover:text-[#FF5A00] transition-colors"
          />
        </div>
      </nav>
    </header>
  );
}