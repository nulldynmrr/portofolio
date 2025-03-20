import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../index.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getMenu = () => {
    if (location.pathname === "/") {
      return [
        { name: "Artikel", link: "/artikel" },
        { name: "Experience", link: "experience", isScroll: true },
        { name: "Expertise", link: "expertise", isScroll: true },
        { name: "Project", link: "project", isScroll: true },
        { name: "Study Case", link: "/movApp" },
      ];
    } else if (location.pathname === "/movApp") {
      return [{ name: "Home", link: "/" }];
    }
    return [];
  };

  const menu = getMenu();

  return (
    <nav className="fixed flex justify-between items-center top-0 left-0 w-full z-50 py-4 px-[20px] md:px-[160px] lg:px-[200px] bgNavbar text-white">
      <div className="text-lg font-bold mr-12">
        <Link to="/" className="hover:underline">
          dynm
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <AiOutlineMenu className="w-6 h-6" />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul
          className="flex flex-col items-center space-y-4 text-2xl text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          {menu.map((item, index) =>
            item.isScroll ? (
              <li key={index}>
                <ScrollLink
                  to={item.link}
                  smooth={true}
                  duration={500}
                  offset={item.link === "home" ? -20 : -70}
                  className="cursor-pointer hover:transition duration-300"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ) : (
              <li key={index}>
                <Link to={item.link} className="hover:transition duration-300">
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-white absolute bottom-4"
        >
          <AiOutlineClose className="w-6 h-6 mb-12" />
        </button>
      </div>

      <ul className="hidden lg:flex space-x-4">
        {menu.map((item, index) =>
          item.isScroll ? (
            <li key={index}>
              <ScrollLink
                to={item.link}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:transition duration-300"
              >
                {item.name}
              </ScrollLink>
            </li>
          ) : (
            <li key={index}>
              <Link to={item.link} className="hover:transition duration-300">
                {item.name}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
