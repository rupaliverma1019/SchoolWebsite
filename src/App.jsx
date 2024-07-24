import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './Components/NavigationBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Academics from './Pages/Academics';
import Faculty from './Pages/Faculty';
import Students from './Pages/Students';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Admissions from './Pages/Admissions';



function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
