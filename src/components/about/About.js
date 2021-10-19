import './about.css'
import AboutSection from './AboutSection'
import { ParallaxBanner } from 'react-scroll-parallax';




const About = () => {
  return (    
    <div className='page-container'>
      <h1 className='header'>Hello, my name is John Shellabarger.</h1>
      <div class="image-overlay">

          <ParallaxBanner
        className="parallax-banner"
        layers={[
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2Fbackground.png?alt=media&token=f56b3839-8a1b-46d0-896e-87b70f8511ca',
                amount: -.1,
            },
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2Fme.png?alt=media&token=78cb826c-ea28-4453-b06c-d4a4a053fd8e',
                amount: 0.4,
            }
        ]}
        style={{
            height: '90vh',
        }}
    >
    </ParallaxBanner>
          <div class="element"><AboutSection /></div>

          </div>
    </div>
  )
}

export default About
