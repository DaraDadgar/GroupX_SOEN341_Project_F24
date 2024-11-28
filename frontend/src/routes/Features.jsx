import React from "react";
import "../css/features.css";

export default function FeaturesPage() {
  return (
    <div className="features-container">
      <div className="features-header">
        <h1>Discover Our Features</h1>
        <p>
          Empowering teachers and students to collaborate, grow, and learn from
          project-based peer evaluations.
        </p>
      </div>
      <section className="features-list">
        <div className="feature-item">
          <h2>Create Teams with Ease</h2>
          <p>
            Teachers can effortlessly create and manage student teams for their
            class projects. Perfect for fostering collaboration and teamwork.
          </p>
        </div>
        <div className="feature-item">
          <h2>Peer Rating System</h2>
          <p>
            At the end of each semester, students rate their peers based on
            contribution, teamwork, and effort. Encourage self-reflection and
            constructive feedback.
          </p>
        </div>
        <div className="feature-item">
          <h2>Feedback for Students</h2>
          <p>
            Students gain valuable insights from their peers to understand
            strengths and areas of improvement for personal growth.
          </p>
        </div>
        <div className="feature-item">
          <h2>Teacher Observations</h2>
          <p>
            Teachers can observe the feedback provided by students, identifying
            patterns and tracking progress to guide future development.
          </p>
        </div>
      </section>
    </div>
  );
}
