import React from 'react'
import './contact.css'
import { FaGoogle, FaLinkedinIn, FaGithub, FaLink} from "react-icons/fa";


const Contact = () => {
  return (
    <div className='contact-container'>
      
      <h1 className='contact-header'>Get in touch</h1>

      <p className='contact-subtext'>For any inquiries, or just to say hello, please contact me.</p>

      {/* <div className='social-icons-container'>
        <ul className='social-ul'>
          <li><FaGoogle className='fa-icon'/>Gmail</li> 
          <li><FaLinkedinIn className='fa-icon'/>LinkedIn</li> 
          <li><FaGithub className='fa-icon'/>Github</li> 
        </ul>
      </div> */}

    <div className='icon-div'>
      <a className='social-links' href="#"><FaGoogle className='social-icon' /><span>Gmail</span></a>
      <a className='social-links' href="https://www.linkedin.com/in/johnshellabarger/"><FaLinkedinIn className='social-icon' /><span>LinkedIn</span></a>
      <a className='social-links' href="https://github.com/johnshellabarger"><FaGithub className='social-icon' /><span>Github</span></a>
    </div>

      <button className='resume-btn'>VIEW RESUME</button>
    
    </div>
  )
}

export default Contact
