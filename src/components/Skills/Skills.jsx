import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Skills.css";
import skills from "../../data/skills";

export default function Skills() {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="skills-section" id="skills">

      <div className="skills-header">
        <span>SKILLS</span>
        <p>
          Technologies, tools and core competencies I use to build reliable, scalable software solutions.
        </p>
      </div>

      <div className="skills-tabs">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={active === category ? "tab active" : "tab"}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="skills-grid"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {skills[active].map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  className="skill-chip"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 15,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon
                    className="skill-icon"
                    style={{ color: skill.color }}
                  />

                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}