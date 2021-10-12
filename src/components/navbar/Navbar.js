import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars } from "react-icons/fa";

 


const Navbar = () => {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);


    return (

      <>
      <div className='js-logo-container'>
        <img className='js-logo glitch' src='https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2F0001%204.jpg?alt=media&token=f9651b19-d1a1-405f-bd90-7f0f22c71e49' alt='logo' />
      </div>

      <nav className='navbar'>
        <div className='nav-container'>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            <FaBars />

          </div>
        </div>

        
          {/* <ul className={showNav ? 'nav-items' : 'nav-items open'}>
            <NavLink activeClassName='nav-link-active' className='link' to='/' exact={true}><li>About</li></NavLink>
            <NavLink activeClassName='nav-link-active' className='link' to='/projects'><li>Projects</li></NavLink>
            <NavLink activeClassName='nav-link-active' className='link' to='/contact'><li>Contact</li></NavLink>
          </ul> */}
      </nav>
      </>

    )
}

export default Navbar
