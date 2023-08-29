import { NavLink } from "react-router-dom";
import './assets/NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to="/" activeClassName="active" className="nav-item">
        HOME
      </NavLink>
      <NavLink to="/about" activeClassName="active" className="nav-item">
        ABOUT
      </NavLink>
      <NavLink to="/skills" activeClassName="active" className="nav-item">
        SKILLS
      </NavLink>
      <NavLink to="/education" activeClassName="active" className="nav-item">
        EDUCATION
      </NavLink>
      <NavLink to="/experience" activeClassName="active" className="nav-item">
        EXPERIENCE
      </NavLink>
      <NavLink to="/contact" activeClassName="active" className="nav-item">
        CONTACT
      </NavLink>
    </div>
  );
}

export default NavBar;