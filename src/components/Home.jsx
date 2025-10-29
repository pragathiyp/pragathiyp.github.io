
import Hero from "./Hero";
import Projects from "./Projects";
import Research from "./Research";
import Experience from "./Experience";
import Contact from "./Contact";
import Timeline from "./Timeline";
import Hobbies from "./Hobbies";
import LitReview from "./LitReview";
function Home() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="research">
        <Research />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      {/* <section id="litreview">
        <LitReview />
      </section> */}
      <section id="hobbies">
        <Hobbies />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
