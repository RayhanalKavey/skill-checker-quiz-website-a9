import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="nav-bar flex text-xl justify-between items-center px-10 h-[5rem] shadow-xl">
      <NavLink to="/">Skill Checker</NavLink>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/home"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/statistics"
        >
          Statistics
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/blog"
        >
          Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
