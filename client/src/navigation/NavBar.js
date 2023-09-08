import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/NavBar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function NavBar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    setExpandNavbar(false);
  }, [location]);
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
        <NavLink to="/about" activeClassName="active" className="nav-item">
          ABOUT
        </NavLink>
        <NavLink to="/contact" activeClassName="active" className="nav-item">
          CONTACT
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
