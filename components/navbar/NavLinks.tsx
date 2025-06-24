import { links } from "@/utils/links";
import Link from "next/link";

function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href} className="text-sky-50 hover:text-sky-500">
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );
}
export default NavLinks;
