import "../css/teacher-courses.css";

export default function TCourses() {
  return <Course />;
}

function Course() {
  return (
    <div className="course">
      <div className="course-content">
        <h2>SOEN 341: Software Process and Practices</h2>
        <h3>Description:</h3>
        <p>
          This course covers the following topics: basic principles of software
          engineering; introduction to software process, including activities,
          phases, organization, roles, teamwork, and conflict resolution;
          notations used in software engineering; software development
          practices, including documentation, modern version control, review,
          testing, agile, and continuous integration.
        </p>
        <span className="edit">EDIT</span>
      </div>
    </div>
  );
}
