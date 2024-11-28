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
          <div className="team-member-img">
            <img src={dara} alt="Team Member" />
            <h3>Dara Dadgar</h3>
            <p className="title">Scrum Master</p>
          </div>
          <div className="team-member-desc">
            <p className="desc">Dara excels at fostering collaboration and ensuring the team adheres to Agile principles.
              With strong organizational skills, they guide projects to success by resolving roadblocks 
              and keeping everyone aligned with the project goals.</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img">
            <img src={oren} alt="Team Member" />
            <h3>Oren Argot</h3>
            <p className="title">Software Process Specialist</p>
          </div>
          <div className="team-member-desc">
            <p className="desc">Oren is an expert in optimizing workflows and refining software development methodologies.
               Their analytical approach ensures that the team's processes are efficient, effective, and scalable.</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img"> 
            <img src={mathieu} alt="Team Member" />
            <h3>Mathieu Phan</h3>
            <p className="title">Quality Assurance Manager</p>
          </div>
          <div className="team-member-desc">
            <p className="desc">Mathieu is dedicated to delivering flawless products by leading rigorous testing procedures.
               Their attention to detail and commitment to excellence ensure a top-tier user experience.</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img"> 
            <img src={brandon} alt="Team Member" />
            <h3>Brandon Phelps</h3>
            <p className="title">Malicious Software Developer</p>
          </div>
          <div className="team-member-desc">
            <p className="desc">Brandon specializes in understanding and simulating cybersecurity threats.
               Their work helps the team identify vulnerabilities and strengthen system defenses against potential attacks.</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img"> 
            <img src={daniel} alt="Team Member" />
            <h3>Daniel Secelean</h3>
            <p className="title">Cloud Engineer</p>
          </div>
          <div className="team-member-desc">
            <p className="desc">Daniel is a skilled architect of scalable, reliable cloud solutions.
               They design and implement robust infrastructure to support the team’s applications and ensure seamless operations.</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img"> 
            <img src={marc} alt="Team Member" />
            <h3>Marchelino Habchi</h3>
            <p className="title">Emotional Supporter</p>
          </div>
          <div className="team-member-desc">
            <p className="desc">Marchelino brings empathy and a listening ear to the team, creating a positive and supportive work environment.
               Their interpersonal skills help the team navigate stress and maintain morale.</p>
          </div>
        </div>
      </section>

      <footer className="about-us-footer">
        <p>Contact us at <a href="mailto:info@peerassessment.com">info@peerassessment.com</a></p>
      </footer>
    </div>
  );
};
