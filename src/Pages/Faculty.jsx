// Faculty.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import facultyData from './FacultyData';
import '../Pages/CSS/Faculty.css'; // Import the CSS file

const Faculty = () => {
  const [faculty, setFaculty] = useState(facultyData);

  // Function to update the experience
  const updateExperience = () => {
    const updatedFaculty = faculty.map(member => {
      const years = parseInt(member.experience.match(/\d+/)[0], 10);
      const updatedExperience = member.experience.replace(/\d+/, years + 1);
      return { ...member, experience: updatedExperience };
    });

    setFaculty(updatedFaculty);
  };

  useEffect(() => {
    const intervalId = setTimeout(updateExperience, 10 * 1000);
    return () => clearTimeout(intervalId);
  }, [faculty]);

  return (
    <div className="faculty-container">
      <Typography variant="h2" gutterBottom className="faculty-header">
        Faculty
      </Typography>
      <Grid container spacing={4}>
        {faculty.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="faculty-card">
              <CardContent>
                <Typography variant="h5" component="div" className="faculty-name">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="faculty-position">
                  {member.position}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="faculty-qualification">
                  {member.qualification}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="faculty-experience">
                  {member.experience}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Faculty;
