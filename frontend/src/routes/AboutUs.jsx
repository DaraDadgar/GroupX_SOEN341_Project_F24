import React from "react";
import "../css/about-us.css"; // Optional for styling
import dara from "../pictures/dara.jpg"
import oren from "../pictures/oren.jpg"
import mathieu from "../pictures/mathieu.jpg";
import brandon from "../pictures/brandon.jpg";
import daniel from "../pictures/daniel.jpg";
import marc from "../pictures/marc.jpg";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p className="subtitle">Empowering teams with efficient peer assessment.</p>
      </div>

      <section className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          Our goal is simple: To provide a tool that makes peer assessment smooth,
          transparent, and effective. We believe in building stronger teams through
          clear, actionable feedback.
        </p>

        <h2>What We Do</h2>
        <p>
          Peer Assessment Tool allows you to easily track contributions, collaboration,
          and overall performance. Whether you’re in a classroom or at the office,
          our platform makes assessments efficient and insightful.
        </p>

        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src={dara} alt="Team Member" />
          <h3>Dara Dadgar</h3>
          <p>Scrum Master</p>
        </div>
        <div className="team-member">
          <img src={oren} alt="Team Member" />
          <h3>Oren Argot</h3>
          <p>Software Process Specialist</p>
        </div>
        <div className="team-member">
          <img src={mathieu} alt="Team Member" />
          <h3>Mathieu Phan</h3>
          <p>Quality Assurance Manager</p>
        </div>
        <div className="team-member">
          <img src={brandon} alt="Team Member" />
          <h3>Brandon Phelps</h3>
          <p>Malicious Software Developer</p>
        </div>
        <div className="team-member">
          <img src={daniel} alt="Team Member" />
          <h3>Daniel Secelean</h3>
          <p>Cloud Engineer</p>
        </div>
        <div className="team-member">
          <img src={marc} alt="Team Member" />
          <h3>Marchelino Habchi</h3>
          <p>Emotional Support Representative</p>
        </div>
      </section>

      <footer className="about-us-footer">
        <p>Contact us at <a href="mailto:info@peerassessment.com">info@peerassessment.com</a></p>
      </footer>
    </div>
  );
};
