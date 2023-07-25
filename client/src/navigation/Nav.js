import NavBar from "./NavBar";
import About from '../components/About';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Home from '../components/Home';
import Skills from '../components/Skills';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <img src="#" alt="profilePicture" id="profilePic" />
      <h2 id="profileName">Mark Agluba</h2>
      <h3 id="profilePosition">Software Developer in Canada</h3>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/skills" exact element={<Skills />} />
          <Route path="/education" exact element={<Education />} />
          <Route path="/experience" exact element={<Experience />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Nav;
