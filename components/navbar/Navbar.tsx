import Container from "../global/Container";
import CartButton from "./CartButton";
import Logo from "./Logo";
import NavbarScrollContainer from "./NavbarScrollContainer";
import NavLinks from "./NavLinks";
import { useState, useEffect } from "react";

function Navbar() {
  return (
    <NavbarScrollContainer>
      <div className=" flex flex-col sm:flex-row sm:justify-evenly sm:items-center py-8">
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
      </div>
    </NavbarScrollContainer>
  );
}
export default Navbar;
