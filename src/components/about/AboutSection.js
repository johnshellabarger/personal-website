import { useHistory } from 'react-router-dom'

const AboutSection = () => {
  const history = useHistory()
  return (
    <div className='about-section'>
        <h1 className='about-header'>
          I am a Full-stack Software Engineer and Designer from Denver, Colorado.
        </h1>

        <p className='about-sub-paragraph'>
          Experience in JavaScript Front-End based programming, 
          and Ruby Back-End database development. My background 
          as a graphic designer provides a lead role in who I am 
          as a developer, allowing me to focus on attention to details,
          and aesthetically pleasing UI/UX design.
        </p>

        <div className='btn-wrapper'>
          <button className='contact-btn' onClick={() => history.push("/contact")}>CONTACT ME</button>
        </div>
    </div>
  )
}

export default AboutSection
