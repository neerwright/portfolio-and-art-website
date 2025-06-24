type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects/Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/art", label: "Art-Shop" },

  { href: "/orders", label: "orders" },
  { href: "/reviews", label: "reviews" },
  { href: "/admin/sales", label: "dashboard" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "sales" },
  { href: "/admin/products", label: "my products" },
  { href: "/admin/products/create", label: "create product" },
];
