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
import pfp from '../../assets/images/programmer.webp'
import { Col, Row, Container } from 'react-bootstrap'
import Logo from './Logo'
import TypeWriterEffect from 'react-typewriter-effect'

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
    <Container className="page">
      <Row className="home-row">
        <Col className="home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br></br>
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m&nbsp; </span>
              <span className="Name">
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
              </span>

              <br />
            </h1>
            <h2>Student, Developer, Amateur Artist </h2>
            <Link to="/contact" className="button">
              {' '}
              Contact Me{' '}
            </Link>
          </div>
        </Col>
        <Col className="image-wrapper" xs={4} md={6} lg={7} xl={8}>
          <img className="pfp moveArrow" src={pfp}></img>
        </Col>
      </Row>
      <div className="background"></div>
    </Container>
  )
}

export default Home
