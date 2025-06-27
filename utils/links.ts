export type NavLink = {
  href: string;
  label: string;
};

export const signedOutLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects/Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/art", label: "Art-Shop" },
];

export const signedInLinks: NavLink[] = [
  { href: "/orders", label: "orders" },
  { href: "/admin/sales", label: "dashboard" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "sales" },
  { href: "/admin/products", label: "my products" },
  { href: "/admin/projects", label: "my projects" },
  { href: "/admin/products/create", label: "create product" },
  { href: "/admin/projects/create", label: "create project" },
];
