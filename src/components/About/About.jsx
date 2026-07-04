import { FiBookOpen, FiAward } from "react-icons/fi";
import "./About.css";

export default function About() {
  return (
    <section className="about-section " id="about">

      <div className="about-header">
        <span>ABOUT ME</span>
        <h2>Who I Am</h2>
      </div>

      <div className="about-content">

        <p>
          I'm a <strong>Computer Science graduate</strong> with internship
          experience in <strong>Software Development</strong> and
          <strong> Recruitment Operations</strong>. I enjoy building reliable
          applications, solving practical problems, and continuously learning
          modern technologies.
        </p>

        <p>
          My experience includes Android development, backend development, and
          collaborating with cross-functional teams to deliver scalable software
          while adapting quickly to new challenges.
        </p>

        <div className="about-chips">
          <span>#Android</span>
          <span>#Backend</span>
          <span>#Java</span>
          <span>#Kotlin</span>
          <span>#Firebase</span>
          <span>#SQL</span>
          <span>#ProblemSolver</span>
          <span>#OpenToWork</span>
        </div>

      </div>

      <div className="education-card">

        <div className="education-left">

          <div className="edu-icon">
            <FiBookOpen />
          </div>

          <div className="edu-content">

            <h3>Education</h3>

            <h4>B.Tech Computer Science & Engineering</h4>

            <p>JMIT, Radaur • Kurukshetra University</p>

            <span>August 2021 — September 2025</span>

          </div>

        </div>

        <div className="education-right">

          <FiAward className="award-icon" />

          <small>CGPA</small>

          <h2>8.12<span>/10</span></h2>

        </div>

      </div>

    </section>
  );
}