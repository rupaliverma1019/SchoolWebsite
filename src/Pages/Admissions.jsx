import React, { useState } from 'react';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import '../Pages/CSS/Admissions.css'; // Import the CSS file

const Admissions = () => {
  // State for managing important dates and form link
  const [dates] = useState({
    formAvailability: "March 1st",
    lastDate: "March 31st",
    entranceTest: "April 15th",
    resultsAnnouncement: "April 30th"
  });

  const [formLink] = useState("/path/to/admission-form.pdf");

  return (
    <Container className="admissions-container">
      <h1>Admissions</h1>
      
      <Card className="admissions-card">
        <Card.Body>
          <Card.Title>Admission Process</Card.Title>
          <Card.Text>
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card className="admissions-card">
        <Card.Body>
          <Card.Title>Admission Criteria</Card.Title>
          <Card.Text>
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card className="admissions-card">
        <Card.Body>
          <Card.Title>Important Dates</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Admission Form Availability: {dates.formAvailability}</ListGroup.Item>
            <ListGroup.Item>Last Date for Submission: {dates.lastDate}</ListGroup.Item>
            <ListGroup.Item>Entrance Test: {dates.entranceTest}</ListGroup.Item>
            <ListGroup.Item>Announcement of Results: {dates.resultsAnnouncement}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      
      <Card className="admissions-card">
        <Card.Body>
          <Card.Title>Download Admission Forms</Card.Title>
          <Button variant="primary" href={formLink} download>
            Download Form
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Admissions;
