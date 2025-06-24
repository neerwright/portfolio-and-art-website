"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

function NavbarScrollContainer({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        console.log("scroll vis = false");
      } else {
        setIsVisible(true);
        console.log("scroll vis = true");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  });

  return (
    <nav
      className={`transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } shadow-xl bg-stone-950 fixed top-0 inset-x-0 z-50  text-center`}
    >
      <div>{children}</div>
    </nav>
  );
}

export default NavbarScrollContainer;
