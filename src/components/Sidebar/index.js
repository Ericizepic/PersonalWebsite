import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import myLogo from '../../assets/images/logo-s.png'
import myLogosub from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAnglesLeft,
  faBorderStyle,
  faEnvelope,
  faHome,
  faLink,
  faUser,
  faFile,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import pdf from '../../assets/Eric_Du_Resume.pdf'


const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink
          exact="true"
          className="home-link"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon
            icon={faHome}
            className="ico"
            to="/home"
            color="#4d4d4e"
          />
        </NavLink>
        <NavLink exact="true" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} className="ico" color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="contact-link ico" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} className="ico" color="#4d4d4e" />
        </NavLink>
        <a className="resume-link" href={pdf} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFile} className="ico" color="#4d4d4e" />
        </a>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/Ericizepic">
            <FontAwesomeIcon icon={faGithub} className="ico2" color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
