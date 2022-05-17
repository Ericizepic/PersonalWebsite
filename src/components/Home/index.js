import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pfp from '../../assets/images/pfp.png'
import { Col, Row, Container } from 'react-bootstrap'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['E', 'r', 'i', 'c']

  useEffect(() => {
    const effect = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => effect
  }, [])

  return (
    <Container className = "page">
      <Row className ="home-row">
        <Col className="home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br></br>
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m&nbsp; </span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
            </h1>
            <h2>Student, Developer, Amateur Artist </h2>
            <Link to="/contact" className="button">
              {' '}
              Contact Me{' '}
            </Link>
          </div>
        </Col>
        <Col className="image-wrapper" xs={4} md={6}>
          <img className="pfp" src={pfp}></img>
        </Col>
      </Row>
      <div className="background">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home
