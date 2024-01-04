import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="nav-bar">
      <h1>Praveen Chasta</h1>
      <ul className="ul-list">
        <Link to="/about">
          <li className="list-item">About</li>
        </Link>
        <Link to="/project">
          <li className="list-item">Project</li>
        </Link>
        <Link to="/contact">
          <li className="list-item">Contact</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default Header
