import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav>
      <NavLink className="nav-link" to="/home">
        Home
      </NavLink>

      <NavLink className="nav-link" to="/statistics">
        Statistics
      </NavLink>

      <NavLink className="nav-link" to="/blog">
        Blog
      </NavLink>
    </nav>
  );
};

export default Header;
