import { useHistory } from 'react-router-dom'
import { ParallaxBanner } from 'react-scroll-parallax';

const AboutSection = () => {
  const history = useHistory()
  return (
    <div className='about-section'>
        <h1 className='about-header'>
          I am a Full-stack Software Engineer and Designer from Denver, Colorado.
        </h1>

        <div className='btn-wrapper'>
          <button className='contact-btn' onClick={() => history.push("/contact")}>CONTACT ME</button>
        </div>
    </div>
  )
}

export default AboutSection
