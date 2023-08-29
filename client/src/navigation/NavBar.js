import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./assets/NavBar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function NavBar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <NavLink to="/" activeClassName="active" className="nav-item">
          HOME
        </NavLink>
        <NavLink to="/skills" activeClassName="active" className="nav-item">
          SKILLS
        </NavLink>
        <NavLink to="/experience" activeClassName="active" className="nav-item">
          EXPERIENCE
        </NavLink>
        <NavLink to="/contact" activeClassName="active" className="nav-item">
          CONTACT
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
