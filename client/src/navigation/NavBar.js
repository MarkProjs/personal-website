import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/" activestyle="true" className="navMenu">
        HOME
      </NavLink>
      <NavLink to="/about" activestyle="true" className="navMenu">
        ABOUT
      </NavLink>
      <NavLink to="/skills" activestyle="true" className="navMenu">
        SKILLS
      </NavLink>
      <NavLink to="/education" activestyle="true" className="navMenu">
        EDUCATION
      </NavLink>
      <NavLink to="/experience" activestyle="true" className="navMenu">
        EXPERIENCE
      </NavLink>
      <NavLink to="/contact" activestyle="true" className="navMenu">
        CONTACT
      </NavLink>
    </nav>
  );
}

export default NavBar;
