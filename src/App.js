import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

import './App.css'

const App = () => (
  <>
    <div className="app-container">
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  </>
)

export default App
