import React from 'react'
import './contact.css'
import { FaGoogle, FaLinkedinIn, FaGithub, } from "react-icons/fa";


const Contact = () => {

  return (
    <div className='page-container'>
      <div className='contact-page-container'>
        <div className='left'>
        <div className='contact-container'>
      
      <h1 className='contact-header'>Get in touch</h1>

      <p className='contact-subtext'>For any inquiries, or just to say hello, please contact me.</p>


    <div className='icon-div'>

      <a className='social-links' href="mailto:johnwilliamshellabarger@gmail.com"><FaGoogle className='social-icon' /><span>Gmail</span></a>
      <a className='social-links' href="https://www.linkedin.com/in/johnshellabarger/" rel="noopener noreferrer" target="_blank"><FaLinkedinIn className='social-icon' /><span>LinkedIn</span></a>
      <a className='social-links' href="https://github.com/johnshellabarger" rel="noopener noreferrer" target="_blank"><FaGithub className='social-icon' /><span>Github</span></a>
    </div>

      <button className='resume-btn'>VIEW RESUME</button>
    
    </div>
        </div>

        <div className='right'>
         <div className='imgContainer'>
         <img className='personal-img' src='https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2FUntitled%20design%20(1).png?alt=media&token=0013842b-29a0-481b-9a6b-8cbe7acb44d3' />
         </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
