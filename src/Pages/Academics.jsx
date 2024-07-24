import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../Pages/CSS/Academics.css'; // Import the CSS file

const Academics = () => {
  // State to manage visibility of card contents
  const [visible, setVisible] = useState({
    primary: false,
    secondary: false,
    seniorSecondary: false,
    methodologies: false,
    resources: false,
  });

  // Toggle visibility function
  const toggleVisibility = (section) => {
    setVisible((prevVisible) => ({
      ...prevVisible,
      [section]: !prevVisible[section],
    }));
  };

  return (
    <Container className="academics-container">
      <h1>Academics</h1>
      
      <h2>Curriculum</h2>
      <Row>
        <Col md={4}>
          <Card className="academic-card">
            <Card.Body>
              <Card.Title onClick={() => toggleVisibility('primary')} className="clickable-title">Primary (Grades 1-5)</Card.Title>
              {visible.primary && (
                <Card.Text>
                  English, Mathematics, Science, Social Studies, Art, Physical Education
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="academic-card">
            <Card.Body>
              <Card.Title onClick={() => toggleVisibility('secondary')} className="clickable-title">Secondary (Grades 6-10)</Card.Title>
              {visible.secondary && (
                <Card.Text>
                  English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="academic-card">
            <Card.Body>
              <Card.Title onClick={() => toggleVisibility('seniorSecondary')} className="clickable-title">Senior Secondary (Grades 11-12)</Card.Title>
              {visible.seniorSecondary && (
                <Card.Text>
                  <strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English <br/>
                  <strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2>Teaching Methodologies</h2>
      <Card className="academic-card">
        <Card.Body>
          <Card.Title onClick={() => toggleVisibility('methodologies')} className="clickable-title">Teaching Methodologies</Card.Title>
          {visible.methodologies && (
            <Card.Text>
              We use a blend of traditional and modern teaching techniques to cater to different learning styles.
            </Card.Text>
          )}
        </Card.Body>
      </Card>

      <h2>Educational Resources</h2>
      <Card className="academic-card">
        <Card.Body>
          <Card.Title onClick={() => toggleVisibility('resources')} className="clickable-title">Educational Resources</Card.Title>
          {visible.resources && (
            <Card.Text>
              Digital classrooms, interactive learning modules, and access to online educational platforms.
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Academics;
