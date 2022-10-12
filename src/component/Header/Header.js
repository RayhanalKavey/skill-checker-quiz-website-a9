import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

import "./Header.css";
const Header = () => {
  const [tog, setTog] = useState(false);
  const toggleMenu = () => {
    setTog(!tog);
    console.log("clicked");
  };
  return (
    <nav className="nav-bar flex justify-between px-8 items-center h-[6.5rem] text-xl   shadow-xl relative">
      <NavLink to="/">
        <span className="sm:text-3xl">Skill Checker</span>
      </NavLink>
      <ul
        className={`lg:flex absolute lg:static ${
          tog
            ? "right-0 top-[104px] bg-[#ad7b43] duration-500 ease-in py-7 text-center"
            : "right-0 top-[-110px]"
        }`}
      >
        <li className={tog ? "mb-5" : undefined}>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            to="/home"
          >
            Home
          </NavLink>
        </li>

        <li className={tog ? "mb-5" : undefined}>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            to="/statistics"
          >
            Statistics
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <div onClick={toggleMenu} className=" lg:hidden h-6 w-6 text-[#f8f5e7]">
        {tog ? <XMarkIcon /> : <Bars4Icon />}
      </div>
    </nav>
  );
};

export default Header;
