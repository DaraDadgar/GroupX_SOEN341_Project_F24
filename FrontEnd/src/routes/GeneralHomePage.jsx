import "../css/GeneralHomePage.css";
<<<<<<< HEAD
import studentImage from "./StudentGroupPicture.jpeg";
function GeneralHomePage() {
=======
import studentImage from "../pictures/StudentGroupPicture.jpeg";
export default function GeneralHomePage() {
>>>>>>> 23a4e48d25a9b081a2b4cfeca625478a2ab705c6
  return (
    <main className="home-page">
      <h1>Welcome to our Peer Assessment Tool!</h1>

      <img className="student-image" src={studentImage} alt="Student" />
      <h2>What we do</h2>
      <p>
        Our platform is designed to enhance collaborative learning by enabling
        students to anonymously evaluate their peers' contributions. Instructors
        benefit from robust management tools that allow them to efficiently
        oversee team dynamics and monitor individual and group performance. With
        our platform, educators can easily identify strengths and areas for
        improvement, facilitating targeted support and enhancing the overall
        learning experience.
      </p>
    </main>
  );
}
<<<<<<< HEAD

export default GeneralHomePage;
=======
>>>>>>> 23a4e48d25a9b081a2b4cfeca625478a2ab705c6
