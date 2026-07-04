import "./Projects.css";
import projects from "../../data/projects";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="projects-section " id="projects">

      <div className="projects-header">
        <span>PROJECTS</span>

        <p>
          Applications built during internships, academics and personal learning,
          focused on solving practical real-world problems.
        </p>
      </div>

      <div className="projects-slider">

        {projects.map((project, index) => (

          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <span className="project-subtitle">
                {project.subtitle}
              </span>

              <div className="project-tech">

                {project.tech.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

              <p>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
                <FiExternalLink />
              </a>

            </div>

          </motion.div>

        ))}

      </div>

      <div className="projects-footer">

        <a
          href="https://github.com/divyam082003?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-btn"
        >
          View All Projects
          <FiArrowRight />
        </a>

      </div>

    </section>
  );
}