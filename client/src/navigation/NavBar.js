import { NavLink } from 'react-router-dom';

function NavBar() {
  return(
    <nav className='NavBar'>
      <NavLink to='/' className='title'>
        <h1>Personal Website</h1>
      </NavLink>
      <div className='NavList'>
        <NavLink to="/projects" activestyle="true" className='NavMenu'>
          Projects
        </NavLink>
        <NavLink to="/profile" activestyle="true" className='NavMenu'>
          Profile
        </NavLink>
        <NavLink to="/Contacts" activestyle="true" className='NavMenu'>
          Contacts
        </NavLink>
        <NavLink to="/About" activestyle="true" className='NavMenu'>
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;