import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Home from "../components/Home";
import Skills from "../components/Skills";
import NavBar from "./NavBar";
import "./assets/Nav.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/skills" exact element={<Skills />} />
          <Route path="/experience" exact element={<Experience />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Nav;
