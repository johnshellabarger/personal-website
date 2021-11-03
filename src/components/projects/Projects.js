import "./projects.css"
import {  FaGithub } from "react-icons/fa";



const Projects = () => {

  return (
    <div className='page-container'>


      <div class="project-container">
        <div className='project-title'>
          <h1 className='title'>The Trading Post</h1>
          <a className='project-links' href="https://www.loom.com/share/d8e4391ee3aa469ebe30649088863e97" rel="noopener noreferrer" target="_blank"><span>VIEW DEMO</span></a>
          <a className='github-link' href='https://github.com/johnshellabarger/trading-app' rel="noopener noreferrer" target="_blank">
            <FaGithub className='github-icon'/>
          </a>
        </div>
        
        <img src="https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2FScreen%20Shot%202021-09-29%20at%202.44.56%20PM.png?alt=media&token=8678794a-97d2-441c-919f-992c8f07fb1d" alt="Deja-Bru" className="image"/>
        <div class="overlay"></div>
      </div>

      <div class="project-container">
        <div className='project-title'>
          <h1 className='title'>Deja-Bru</h1>
          <a className='project-links' href="https://www.loom.com/share/7be139fa08154adea08144e1b904bc4a" rel="noopener noreferrer" target="_blank"><span>VIEW DEMO</span></a>
          <a className='github-link' href='https://github.com/johnshellabarger/deja-bru' rel="noopener noreferrer" target="_blank">
            <FaGithub className='github-icon'/>
          </a>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2FScreen%20Shot%202021-09-30%20at%2010.11.08%20AM.png?alt=media&token=27f5a4dc-892a-4af4-917c-0a787570f762" alt="Deja-Bru" className="image"/>
        <div class="overlay"></div>
      </div>

      <div class="project-container">
        <div className='project-title'>
          <h1 className='title'>Amortization Calculator</h1>
          <a className='project-links' href="https://amortization-calculator.herokuapp.com/" rel="noopener noreferrer" target="_blank"><span>LIVE</span></a>
          <a className='project-links' href="https://www.loom.com/share/f7013d4acdaf4af39fce45e6a989b65c" rel="noopener noreferrer" target="_blank"><span>VIEW DEMO</span></a>
          <a className='github-link' href='https://github.com/johnshellabarger/mortgage-calculator' rel="noopener noreferrer" target="_blank">
            <FaGithub className='github-icon'/>
          </a>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2FScreen%20Shot%202021-11-01%20at%203.05.30%20PM.png?alt=media&token=bb9da149-d14b-44c1-a739-78ae68dff10b" alt="Deja-Bru" className="image"/>
        <div class="overlay"></div>
      </div>

      <div class="project-container">
        <div className='project-title'>
          <h1 className='title'>Trival</h1>
          <a className='project-links' href="https://www.loom.com/share/7ff326fcd94e436bbce235d042743e50" rel="noopener noreferrer" target="_blank"><span>VIEW DEMO</span></a>
          <a className='github-link' href='https://github.com/johnshellabarger/phase-1-project' rel="noopener noreferrer" target="_blank">
            <FaGithub className='github-icon'/>
          </a>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/upload-image-96574.appspot.com/o/Personal%2FScreen%20Shot%202021-09-29%20at%2010.05.27%20PM.png?alt=media&token=07afa72f-996d-4eb1-8f67-434a32d4ee4a" alt="Avatar" className="image"/>
        <div class="overlay"></div>
      </div>

    </div>
  )
}

export default Projects
