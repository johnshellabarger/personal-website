import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)



    return (
      <nav className='navbar'>
        <div className='container'>
          <div className='row'>
       
              <figure class="logo">
                {/* <a href="index.html"><img src="" class="rotate" alt="logo"/></a> */}
              </figure>
    
         
              <ul className='nav-items'>
                <NavLink activeClassName='nav-link-active' className='link' to='/' exact={true}><li>About</li></NavLink>
                <NavLink activeClassName='nav-link-active' className='link' to='/projects'><li>Projects</li></NavLink>
                <NavLink activeClassName='nav-link-active' className='link' to='/contact'><li>Contact</li></NavLink>
              </ul>

          </div>
        </div>
      </nav>
    )
}

export default Navbar
