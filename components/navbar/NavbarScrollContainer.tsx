"use client";

import { ReactNode } from "react";
import { useState, useEffect } from "react";

function NavbarScrollContainer({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const SCROLL_DIST = 200;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > SCROLL_DIST) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  });

  return (
    <nav
      className={`transition-transform duration-1000 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } shadow-xl bg-stone-950 fixed top-0 inset-x-0 z-50  text-center`}
    >
      <div>{children}</div>
    </nav>
  );
}

export default NavbarScrollContainer;
