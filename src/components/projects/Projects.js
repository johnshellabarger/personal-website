import "./projects.css"
import {  FaGithub } from "react-icons/fa";


const Projects = () => {
  return (
    <div>

      <div class="project-container">
        <div className='project-title'>
          <h1 className='title'>The Trading Post</h1>
          <button className='demo-btn'>View Demo</button>
          <FaGithub className='github-icon'/>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyzpty62_qPVcm0KuGztx8_qP_RTUk4VoGs0866ho8ASgtLu95ZC0sh-WHciX2s1YVv8&usqp=CAU" alt="Avatar" className="image"/>
        <div class="overlay"></div>
      </div>

    </div>
  )
}

export default Projects
