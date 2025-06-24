import CartButton from "./CartButton";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavbarScrollContainer from "./NavbarScrollContainer";
import NavLinks from "./NavLinks";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import SignOutLinks from "./SignOutLinks";

function Navbar() {
  return (
    <NavbarScrollContainer>
      <div className=" flex flex-row justify-evenly items-center py-8 shadow-xl">
        <div className="navbar-start flex content-start">
          <Logo />
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="flex justify-center gap-4">
            <NavLinks />
            <li>
              <SignedIn>
                <SignOutLinks textColor={"text-sky-50"} />
              </SignedIn>
            </li>
          </ul>
        </div>

        <div className="navbar-end hidden md:flex ">
          <CartButton></CartButton>
        </div>
        <div className="navbar-end flex md:hidden content-end items-center">
          <LinksDropdown></LinksDropdown>
        </div>
      </div>
    </NavbarScrollContainer>
  );
}
export default Navbar;
