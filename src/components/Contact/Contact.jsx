import "./Contact.css";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiFileText,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-header">
        <span>LET'S CONNECT</span>

        <p>
          Feel free to reach out for opportunities, collaborations, or simply to
          connect.
        </p>
      </div>

      <div className="contact-card">

        <div className="status">

          <span className="status-dot"></span>

          <span>Open to Work</span>

        </div>

        <a
          href="mailto:divyam08102003@gmail.com"
          className="email"
        >
          <FiMail />
          <span>divyam08102003@gmail.com</span>
        </a>

        <div className="contact-actions">

          <a
            href="https://www.linkedin.com/in/div2003/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/divyam082003"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
            GitHub
          </a>

          <a
            href="/resume/Divyam_Bansal_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            <FiFileText />
            View Resume
          </a>

        </div>

      </div>

    </section>
  );
}