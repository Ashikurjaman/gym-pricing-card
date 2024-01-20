import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Products",
      path: "/products",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      name: "Login",
      path: "/login",
    },
  ];
  return (
    <nav className="bg-purple-600">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span className="flex justify-end">
          {open == true ? (
            <XMarkIcon className="h-6 w-6 mr-3 text-white-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 mr-3 text-white-500" />
          )}
        </span>
      </div>

      <ul className={`md:flex md:static py-4 pl-4  absolute duration-700 bg-purple-600 ${open ? 'top-6 ':'-top-60'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
