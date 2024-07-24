import React from 'react';
import '../Pages/CSS/About.css'; // Import the CSS file

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
      
      <h2>Vision</h2>
      <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
      
      <h2>Mission</h2>
      <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
      
      <h2>Message from the Principal</h2>
      <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
      
      <h2>Our Infrastructure and Facilities</h2>
      <ul>
        <li>State-of-the-art science and computer labs</li>
        <li>Spacious and well-equipped classrooms</li>
        <li>Library with a vast collection of books and digital resources</li>
        <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
      </ul>
    </div>
  );
}

export default About;
