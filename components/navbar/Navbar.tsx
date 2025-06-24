import CartButton from "./CartButton";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavbarScrollContainer from "./NavbarScrollContainer";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <NavbarScrollContainer>
      <div className=" flex flex-row justify-evenly items-center py-8">
        <div className="navbar-start flex content-start">
          <Logo />
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="flex justify-center gap-4">
            <NavLinks />
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
