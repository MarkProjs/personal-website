import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Home from "../components/Home";
import Skills from "../components/Skills";
import "./assets/Nav.css";
import {
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <div className="profile">
        <img src="#" alt="profilePicture" id="profilePic" />
        <h2 id="profileName">Mark Agluba</h2>
        <h3 id="profilePosition">Software Developer in Canada</h3>
        <div className="NavLinks">
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
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/skills" exact element={<Skills />} />
        <Route path="/education" exact element={<Education />} />
        <Route path="/experience" exact element={<Experience />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Nav;
