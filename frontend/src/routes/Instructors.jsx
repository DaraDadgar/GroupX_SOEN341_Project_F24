import React, { useState, useEffect } from "react";
import "../css/instructors.css";
import { fetchAPI } from "../functions/ApiInterface";

export default function InstructorsPage() {
  const [instructors, setInstructors] = useState([]);

  // Fetch instructors data
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await fetchAPI("/teachers");
        setInstructors(response.data);
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div className="instructors-container">
      <div className="instructors-header">
        <h1>Registered Instructors</h1>
        <p>Meet the instructors shaping the future of learning!</p>
      </div>
      <section className="instructors-list">
        {instructors.length > 0 ? (
          instructors.map((instructor) => (
            <div key={instructor.id} className="instructor-card">
              <h2>{instructor.name}</h2>
              <p>Email: {instructor.email}</p>
            </div>
          ))
        ) : (
          <p>No instructors registered yet.</p>
        )}
      </section>
    </div>
  );
}
