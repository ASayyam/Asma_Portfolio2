"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 h-10 items-center">
      {links.map(({ name, path }, index) => (
        <Link
          key={index}
          href={path}
          className={`capitalize font-medium hover:text-accent transition-all ${
            path === pathname ? "text-accent border-b-2 border-accent" : ""
          }`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;




