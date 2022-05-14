import { useEffect, useState } from 'react'
import './index.scss'
import { Col, Row, Container } from 'react-bootstrap'
import uwpic from '../../assets/images/waterloo.jpg'
import 'react-slideshow-image/dist/styles.css'
import Slideshow from './Slideshow'

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
            <h1>About Me</h1>
            <p>
              My name is Eric and I am a student presently enrolled at the
              University of Waterloo. I am interesting in mathematics, long
              distance running and art of all mediums. I am looking for an
              opportunity to work with the latest technologies on challenging
              and diverse projects from front end development to machine
              learning.
            </p>
          </div>
        </Col>
        <Col className="image-wrapper-uw" s={10} md={6} lg={7}>
          <img className="uwpic" src={uwpic}></img>
        </Col>
      </Row>
      <Row className="projects-row">
        <h1 className='proj'>What I've Worked On</h1>
        <Slideshow />
      </Row>
    </Container>
  )
}

export default About
