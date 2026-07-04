
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/FeaturedProjects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* <MouseGlow /> */}

      <Navbar />
      <Hero />
      <section className="section-tint">
        <About />
      </section>

      <section className="section-dark">
        <Projects />
      </section>

      <section className="section-tint">
        <Skills />
      </section>

      <section className="section-dark">
        <Experience />
      </section>

      <section className="section-tint">
        <Certifications />
      </section>

      <section className="section-dark">
        <Contact />
      </section>

    </>
  );
}

export default App;