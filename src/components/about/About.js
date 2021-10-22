import './about.css'
import AboutSection from './AboutSection'
import { ParallaxBanner } from 'react-scroll-parallax';
import { useState, useEffect } from 'react' 



const About = () => {
  useEffect(() => {
    controlImage()
  }, [])

  const [isMobile, setIsMobile] = useState(false)

  function controlImage(){
    if (window.innerWidth < 800){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  

  return (    
    <div className='page-container'>
      <h1 className='header'>Hello, my name is John Shellabarger.</h1>

      {isMobile ? (<img className='static-about-photo'src='https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2Ffull_selfie.jpg?alt=media&token=1bae126e-a507-4478-bf15-3bfd1568fe9f' alt='sunset'/>) : (      <ParallaxBanner
          className="parallax-banner"
          layers={[
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2Fbackground.png?alt=media&token=f56b3839-8a1b-46d0-896e-87b70f8511ca',
                amount: -.3,
            },
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2Fme.png?alt=media&token=78cb826c-ea28-4453-b06c-d4a4a053fd8e',
                amount: 0.4,
            }
        ]}
        style={{
            height: '100vh'
        }}
    >
    </ParallaxBanner>)}

      <div class="element"><AboutSection /></div>
    </div>
  )
}

export default About
