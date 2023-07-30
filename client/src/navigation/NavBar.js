import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to="/" activestyle="true" className="nav-item">
        HOME
      </NavLink>
      <NavLink to="/about" activestyle="true" className="nav-item">
        ABOUT
      </NavLink>
      <NavLink to="/skills" activestyle="true" className="nav-item">
        SKILLS
      </NavLink>
      <NavLink to="/education" activestyle="true" className="nav-item">
        EDUCATION
      </NavLink>
      <NavLink to="/experience" activestyle="true" className="nav-item">
        EXPERIENCE
      </NavLink>
      <NavLink to="/contact" activestyle="true" className="nanav-itemMenu">
        CONTACT
      </NavLink>
    </div>
  );
}

export default NavBar;
