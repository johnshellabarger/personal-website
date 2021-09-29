import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

  const [navbar, setNavbar] = useState(true)

  const changeBackground = () => {
    if(window.scrollY >= 1) {
      setNavbar(false)
    } else{
      setNavbar(true)
    }
  }

  window.addEventListener('scroll', changeBackground)

    return (

      <nav className={navbar ? 'navbar' : 'navbar active'}>
          <div className='row'>
       
              <figure className="logo">
                {/* <a href="index.html"><img src="" class="rotate" alt="logo"/></a> */}
              </figure>
    
         
              <ul className='nav-items'>
                <NavLink activeClassName='nav-link-active' className='link' to='/' exact={true}><li>About</li></NavLink>
                <NavLink activeClassName='nav-link-active' className='link' to='/projects'><li>Projects</li></NavLink>
                <NavLink activeClassName='nav-link-active' className='link' to='/contact'><li>Contact</li></NavLink>
              </ul>

          </div>
      </nav>
    )
}

export default Navbar
