import { useEffect, useState } from 'react'
import './index.scss'
import { Col, Row, Container } from 'react-bootstrap'
import uwpic from '../../assets/images/waterloo.jpg'
import 'react-slideshow-image/dist/styles.css'
import Slideshow from './Slideshow'
import TypeWriterEffect from 'react-typewriter-effect'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const effect = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => effect
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
          <img className="uwpic" src={uwpic}></img>
        </Col>
      </Row>
      <Row className="projects-row">
        <h1 className="proj">What I've Worked On</h1>
        <div className="slideshow">
          <Slideshow />
        </div>
      </Row>
    </Container>
  )
}

export default About
