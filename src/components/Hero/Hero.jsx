import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiEye,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import "./Hero.css";
import heroImage from "../../assets/images/hero.png";
import ParticlesBackground from "../Background/ParticlesBackground";

const roles = [
  "Software Engineer",
  "Android Developer",
  "Computer Science Graduate",
  "Problem Solver",
  "Full Stack Enthusiast",
  "Open to Work",
];


export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
       <ParticlesBackground />
      <motion.div
  className="hero-left"
  initial={{
    opacity: 0,
    y: 40,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
    delay : 0.30,
    ease: [0.22, 1, 0.36, 1], // premium ease
  }}
>
        <h1 className="hero-title">
  Hi, I'm <span>Divyam Bansal</span>
</h1>

<div className="role-wrapper">

  <AnimatePresence mode="wait">

    <motion.span
      key={roles[index]}
      className="role"
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -24, opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {roles[index]}
    </motion.span>

  </AnimatePresence>

</div>

<p className="hero-description">
  Computer Science graduate with internship experience in software
  development and recruitment operations. Passionate about building
  scalable applications, solving real-world problems, and continuously
  learning modern technologies.
</p>

        <div className="hero-buttons">

  <a href="#projects" className="primary-btn">
    My Work
    <FiArrowRight className="btn-arrow" />
  </a>

  <a
    href="/resume/Divyam_Bansal_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary-btn"
  >
    <FiEye className="eye" />
    Resume
  </a>

</div>

        <div className="hero-social">

  <a
    href="https://github.com/divyam082003"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FiGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/div2003/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FiLinkedin />
  </a>

  <a
    href="mailto:divyam08102003@gmail.com"
    aria-label="Email"
  >
    <FiMail />
  </a>

</div>
      </motion.div>

      <motion.div
  className="hero-right"
  initial={{
    opacity: 0,
    y: 50,
    scale: 0.96,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    duration: 1,
    delay: 0.30,
    ease: [0.22, 1, 0.36, 1],
  }}
>
        <div className="hero-image-glow"></div>

        <img
          src={heroImage}
          alt="Divyam"
        />
      </motion.div>
    </section>
  );
}