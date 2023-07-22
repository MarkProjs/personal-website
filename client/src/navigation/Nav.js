 import NavBar from './NavBar';
 import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

 function Nav() {
  return(
    <Router>
      <NavBar/>
    </Router>
  );
 }

 export default Nav;