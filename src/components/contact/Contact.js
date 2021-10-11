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
         <img className='personal-img' src='https://lh3.googleusercontent.com/KYye4SteAo-5Quz7sKI8KXXbt33Al9vmirva9vO7Fjj0EqJ0I_ZXIPTI1h7Qn9n46V3ep6HI1lhc_a8byUfr2WuFu3hOXhiBFLlGaWKMEx6_6IQFPDCWw1IGTiqjvC0U_ICaml5waAJjcRO6Kl67dxrmFTHbEI13rIPHwisLL1bwO6_SUVebQeLrvK0KiP8KcRm4TurH5mkE0xGB2WPWeEFlFXlY5QQrcYkoq7b0L-UZAlGpOqiH_8gW6IzqLMLWFXeikUwe5qgAu--IVBafFlfDhueLYyumYeWH7PpTCWKJwZD_jqwSa-AnMmgoPsnEES_xkzXq0PlzlvifTeiiHE4ZsaeYYg7BbgSrR8z4mf6A9TtbNJu9Qg6A908lCGXQoLawM6cXffeKtJ7CY9z2HEoPVvm1em2nIqrgx1kZYomprhrigOY8FOmOCTSzG_SXL4ks4fnNDJcjJixv69IrjUvS18GZvQ1S_DRtxUqIEfCqfze627uLzk6ZNj2eJkKrEc1qTOZe_DX2wVy7rmbh4OUwUu3bUh8ImfkdO8zi0GQnS_A7HD52ZJcEQciTrbTFPrTihd5P8xH1XHQilmvMjfItZVNCwgZV0Z1DcloVF_cQQXmzsySIJfZWnc8VefqdLPYEJD8X-0E-HYIRKTRHXb9i09gWTqqhwNFuqlvT-vyk4soktwoXq8gVDPwCjAOLsMiW58Y_nV4KVKTvb4l0kJo=s1406-no?authuser=0' />
         </div>
        </div>

      </div>







    {/* <div className='contact-containerr'>

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
    <div className='contact-img-container'>
      <img className='contact-img'src='https://lh3.googleusercontent.com/KYye4SteAo-5Quz7sKI8KXXbt33Al9vmirva9vO7Fjj0EqJ0I_ZXIPTI1h7Qn9n46V3ep6HI1lhc_a8byUfr2WuFu3hOXhiBFLlGaWKMEx6_6IQFPDCWw1IGTiqjvC0U_ICaml5waAJjcRO6Kl67dxrmFTHbEI13rIPHwisLL1bwO6_SUVebQeLrvK0KiP8KcRm4TurH5mkE0xGB2WPWeEFlFXlY5QQrcYkoq7b0L-UZAlGpOqiH_8gW6IzqLMLWFXeikUwe5qgAu--IVBafFlfDhueLYyumYeWH7PpTCWKJwZD_jqwSa-AnMmgoPsnEES_xkzXq0PlzlvifTeiiHE4ZsaeYYg7BbgSrR8z4mf6A9TtbNJu9Qg6A908lCGXQoLawM6cXffeKtJ7CY9z2HEoPVvm1em2nIqrgx1kZYomprhrigOY8FOmOCTSzG_SXL4ks4fnNDJcjJixv69IrjUvS18GZvQ1S_DRtxUqIEfCqfze627uLzk6ZNj2eJkKrEc1qTOZe_DX2wVy7rmbh4OUwUu3bUh8ImfkdO8zi0GQnS_A7HD52ZJcEQciTrbTFPrTihd5P8xH1XHQilmvMjfItZVNCwgZV0Z1DcloVF_cQQXmzsySIJfZWnc8VefqdLPYEJD8X-0E-HYIRKTRHXb9i09gWTqqhwNFuqlvT-vyk4soktwoXq8gVDPwCjAOLsMiW58Y_nV4KVKTvb4l0kJo=s1406-no?authuser=0' />
    </div>
    </div> */}
    </div>
  )
}

export default Contact
