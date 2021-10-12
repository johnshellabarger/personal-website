import './about.css'
import AboutSection from './AboutSection'
import { ParallaxBanner } from 'react-scroll-parallax';




const About = () => {
  return (    
    <div className='page-container'>

          <ParallaxBanner
        className="parallax-banner"
        layers={[
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2Fbg1.png?alt=media&token=05a395b2-20c5-44ba-b434-7dd31e31f503',
                amount: 0.1,
            },
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2Fgirl1.png?alt=media&token=09afb603-cca8-4bb2-a8c4-ee47d48be686',
                amount: 0.4,
            },
            {
              image: 'https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2Frock1.png?alt=media&token=95a5c404-9616-48fc-81e5-261d58d11c11',
              amount: 0.8,
            }
        ]}
        style={{
            height: '90vh',
        }}
    >
    </ParallaxBanner>
          <div class="element"><AboutSection /></div>

    </div>
  )
}

export default About
