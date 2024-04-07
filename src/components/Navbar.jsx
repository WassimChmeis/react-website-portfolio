/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MdSegment, MdClear } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    setNav(!nav);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" z-20 bg-white fixed w-full flex justify-between items-center mx-auto px-5 md:px-12 text-gray-700  h-20 shadow-md mb-1 ">
      <h1 className=" font-bold text-xl flex">
        Wasim.
        <FaConnectdevelop className="text-[28px] text-red-500" />
      </h1>
      <ul className="font-semibold text-[17px] sm:flex hidden">
        <li className="p-3">
          <a
            href="#"
            onClick={(event) => handleClick(event, "home")}
            className="hover:text-blue-500 transition-colors "
          >
            Home
          </a>
        </li>
        <li className="p-3">
          <a
            href="#"
            onClick={(event) => handleClick(event, "about")}
            className="hover:text-blue-500 transition-colors"
          >
            About
          </a>
        </li>
        <li className="p-3">
          <a
            href="#"
            onClick={(event) => handleClick(event, "projects")}
            className="hover:text-blue-500 transition-colors"
          >
            Projects
          </a>
        </li>
        <li className="p-3">
          <a
            href="#"
            onClick={(event) => handleClick(event, "contact")}
            className="hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="text-3xl block  sm:hidden">
        <MdSegment />
      </div>
      <div
        className={
          nav
            ? " fixed left-0 top-0 w-full bg-white  ease-in-out duration-300"
            : " ease-linear duration-500 fixed left-[-100%] top-0"
        }
      >
        <div className=" p-6 sm:hidden">
          <div onClick={handleNav} className="text-4xl  burger sm:hidden">
            <MdClear />
          </div>
          <ul className="p-4  text-center pt-24">
            <li className="p-4 border-b py-6 font-semibold border-b-gray-600 ">
              <a href="#" onClick={(event) => handleClick(event, "home")}>
                Home
              </a>
            </li>
            <li className="p-4 border-b py-6 font-semibold border-b-gray-600">
              <a href="#" onClick={(event) => handleClick(event, "about")}>
                About
              </a>
            </li>
            <li className="p-4 border-b py-6 font-semibold border-b-gray-600">
              <a href="#" onClick={(event) => handleClick(event, "projects")}>
                Projects
              </a>
            </li>

            <li className="p-4 border-b py-6 font-semibold">
              <a href="#" onClick={(event) => handleClick(event, "contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
