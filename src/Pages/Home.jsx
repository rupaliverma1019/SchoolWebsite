import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import sports from '../Assets/Image/Sports-Day-612x306.jpg'
import './CSS/Home.css'; // Import the CSS file
import exbition from '../Assets/Image/science-exhibition-1200x600.jpg'
import cultural from '../Assets/Image/cultural.jpg'
import About from './About';
import Academics from './Academics';
import Faculty from './Faculty';
import Students from './Students';
import Gallery from './Gallery';
import Contact from './Contact';
import Admissions from './Admissions';
import Footer from './Footer';
function Home() {
  return (
    <div className="home-page">
      <Container className="text-center my-4">
        {/* <img src={logo} alt="School Logo" height="80" /> */}
        <h1 className="my-3">Springdale Public School</h1>
        <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      </Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sports}
            alt="Annual Sports Day"
          />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={exbition}
            alt="Science Exhibition"
          />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cultural}
            alt="Cultural Fest"
          />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <About />
      <Academics />
      <Admissions />
      <Faculty />
      <Students />
      <Gallery />
      <Contact />
      <Footer/>
    </div>
  );
}

export default Home;
