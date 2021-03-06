import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume'

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path='/resume' component={Resume} />
        </Switch>
    </Router>
  )
}

export default App;


