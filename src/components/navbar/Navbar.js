import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaBars } from "react-icons/fa";

 


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [show, setShow] = useState(false);


  function controlNavbar(){
      if (window.scrollY > 125) {
          setShow(true)
      } else {
          setShow(false)
      }
  }

  function navbarColor(){
    switch(window.location.pathname){
      case '/projects':
      case '/contact':
      case '/resume':
        return true
      default:
        return false
    }
  }

  navbarColor()

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])

    return (

      <>
      <nav className={`navbar ${show && 'nav__blue'} ${navbarColor() ? ('not-homepage') : (null)}`}>
      <div className='js-logo-container'>

      
        {show ? (<img className='js-logo' src='https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2FJSLogo1.svg?alt=media&token=a9917ab0-a12b-4317-8f72-d32e3f1dfe06' alt='logo' />) 
        : (<img className='js-logo' src='https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2FJSLogo1-white.svg?alt=media&token=a19e5632-5ccf-4993-8504-9020d8370fd6' alt='logo' />)}

      </div>
        <div className='nav-container'>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className={`nav-links ${show && 'nav-black'}`}
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
                className={`nav-links ${show && 'nav-black'}`}
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
                className={`nav-links ${show && 'nav-black'}`}
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className={`nav-icon ${show && 'nav-icon-black'}`} onClick={handleClick}>
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
