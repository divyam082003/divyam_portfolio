import { FiBriefcase, FiCalendar } from "react-icons/fi";
import "./Experience.css";

export default function ExperienceCard({ item }) {
  return (
    <div className="timeline-item">

      <div className="timeline-line">
        <div className="timeline-dot"></div>
      </div>

      <div className="experience-card">

        <div className="card-top">

          <div>

            <h3>{item.company}</h3>

            <h4>{item.role}</h4>

          </div>

          <div className="duration">

            <FiCalendar />

            <span>{item.duration}</span>

          </div>

        </div>

        <ul>

          {item.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}

        </ul>

      </div>

    </div>
  );
}