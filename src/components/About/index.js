import { useEffect, useState } from 'react'
import './index.scss'
import { Col, Row, Container } from 'react-bootstrap'
import uwpic from '../../assets/images/waterloo.jpg'
import art1 from '../../assets/images/art1.jpg'
import art2 from '../../assets/images/art2.jpg'
import art3 from '../../assets/images/art3.jpg'
import art4 from '../../assets/images/art4.jpg'

import 'react-slideshow-image/dist/styles.css'
import Slideshow from './Slideshow'
import TypeWriterEffect from 'react-typewriter-effect'
import {
  faJava,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cppIcon from '../../assets/images/cppIcon.png'
import AOS from 'aos'
import Card from './Card'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const effect = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => effect
  }, [])

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <Container className="about-page">
      <Row className="about-row">
        <Col className="about-text" s={10} md={6} lg={5}>
          <div className="about-text-zone">
            <h1>
              <TypeWriterEffect
                startDelay={2000}
                cursorColor="blue"
                multiTextDelay={1500}
                multiText={['About Me']}
                typeSpeed={200}
                hideCursorAfterText={true}
              />
            </h1>
            <p>
              I am presently learning Computer Science at the University of
              Waterloo. As a life long learner, I am always eager to pick up new
              things and learn more about how the world works. I am currently
              looking for opportunities to tackle challenging problem and work
              on a diverse array of projects.
            </p>
          </div>
        </Col>
        <Col className="image-wrapper-uw" s={10} md={6} lg={7}>
          <img
            data-aos="fade-left"
            data-aos-duration="3000"
            className="uwpic"
            src={uwpic}
          ></img>
        </Col>
      </Row>
      <Row className="skills-row">
        <Col s={10} md={6} lg={5}>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faJava} color="#DD0031" />
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
                <FontAwesomeIcon icon={cppIcon} />
              </div>
            </div>
          </div>
        </Col>
        <Col s={10} md={6} lg={7}>
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="skills-text"
          >
            <h1>Skills</h1>
            <h2>
              <b>Languages</b>
            </h2>
            <p>C, C++, Javascript, HTML, CSS/SASS, Python, Racket, Java </p>
            <br></br>
            <br></br>
            <h2>
              <b>Libraries & Technologies</b>
            </h2>
            <p>React, Bootstrap, Git, Bash, TensorFlow, Keras </p>
          </div>
        </Col>
      </Row>
      <Row className="projects-row">
        <h1 className="proj">Technical Projects I've Worked On</h1>
        <div className="slideshow">
          <Slideshow />
        </div>
      </Row>
      <Row className="art-row">
        <h1 className="art-section-title">Some of my Visual Artworks</h1>
        <Col>
          <div className="Art d-flex justify-content-center">
            <Card
              aos="fadeup"
              aos_offset="300"
              durration="1000"
              img={art1}
              title="Still Life"
              desc="Study of human legs. Shaded with charcoal and a 2-B pencil."
            ></Card>
          </div>
          <div className="Art d-flex justify-content-center">
            <Card
              aos="fadeup"
              aos_offset="200"
              durration="1000"
              img={art2}
              title="Old Man"
              desc="Study of the human face. Shaded with charcoal and a 2-B pencil."
            ></Card>
          </div>
          <div className="Art d-flex justify-content-center">
            <Card
              aos="fadeup"
              aos_offset="200"
              durration="1000"
              img={art3}
              title="Air Jordan"
              desc="Depiction of basketball player dunking the basketball. Made with watercolor."
            ></Card>
          </div>
          <div className="Art d-flex justify-content-center">
            <Card
              aos="fadeup"
              aos_offset="200"
              durration="1000"
              img={art4}
              title="The Forest in Autumn"
              desc="View of a dense patch of forest vegetation. Painted with acrylic."
            ></Card>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About
