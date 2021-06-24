import styles from "./Projects.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { PROJECTS } from "../../data/Projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Projects() {
  let sectionRef = useRef(null);
  let projectsRef = new Array(PROJECTS.length);

  useEffect(() => {
    const timeline = gsap.timeline();

    for (let i = 0; i < projectsRef.length; i++) {
      timeline.from(projectsRef[i], {
        duration: 0.8,
        opacity: 0,
        x: 100,
        ease: Power3.easeOut,
      });
    }

    ScrollTrigger.create({
      trigger: sectionRef.current,
      animation: timeline,
      start: "top 80%",
      end: "center 70%",
      scrub: 0.5,
    });
  }, []);

  return (
    <section name="projects" ref={sectionRef} className={`${styles.wrapper}`}>
      <SectionHeader name={"projects"} />
      <div className={`${styles.content_wrapper} ${styles.scrollbar}`}>
        {PROJECTS.map((project, key) => {
          return (
            <ProjectCard
              ref={(el) => (projectsRef[key] = el)}
              key={key}
              name={project.name}
              description={project.description}
              workedOn={project.workedOn}
              previewImg={project.previewImg}
              code={project.code}
              hosted={project.hosted}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
