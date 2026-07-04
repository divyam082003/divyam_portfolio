import "./Experience.css";
import experience from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">

      <div className="experience-header">
        <span>EXPERIENCE</span>

        <p>
          Internships where I gained practical experience working on
          real-world products and business processes.
        </p>
      </div>

      <div className="timeline">

        {experience.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}

      </div>

    </section>
  );
}