import React from 'react';
import { extracurricularActivities, clubsAndSocieties, achievements, studentCouncil } from '../Pages/StudentData';
import '../Pages/CSS/Student.css'; // Import CSS for styling

const Students = () => {
  return (
    <div className="students-container">
      <h1>Life at Springdale</h1>

      {/* Extracurricular Activities Section */}
      <section className="section">
        <h2>Extracurricular Activities</h2>
        <div className="card-list">
          {extracurricularActivities.map((activity, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <h5 className="card-title">{activity}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clubs and Societies Section */}
      <section className="section">
        <h2>Clubs and Societies</h2>
        <div className="card-list">
          {clubsAndSocieties.map((club, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <h5 className="card-title">{club}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section">
        <h2>Achievements</h2>
        <div className="card-list">
          {achievements.map((achievement, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <h5 className="card-title">{achievement}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Council Section */}
      <section className="section">
        <h2>Student Council</h2>
        <div className="card-list">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><strong>President:</strong> {studentCouncil.president}</h5>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><strong>Vice President:</strong> {studentCouncil.vicePresident}</h5>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><strong>Secretary:</strong> {studentCouncil.secretary}</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;
