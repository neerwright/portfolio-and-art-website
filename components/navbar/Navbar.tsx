import Container from "../global/Container";
import CartButton from "./CartButton";
import NavbarSearch from "./NavbarSearch";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import { Suspense } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <nav className="border-b bg-stone-950">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <div className="navbar-start flex content-start">
          <Logo />
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="flex justify-center gap-4">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end"></div>
        <CartButton></CartButton>
      </Container>
    </nav>
  );
}
export default Navbar;
