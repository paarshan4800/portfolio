import styles from "./Projects.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { PROJECTS } from "../../data/Projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { MdViewCarousel } from "react-icons/md";
import { BsGrid3X3GapFill } from "react-icons/bs";
import React, { useRef, useEffect, useState } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Projects() {
  let sectionRef = useRef(null);
  let projectsRef = new Array(PROJECTS.length);
  let contentWrapperRef = useRef(null);

  const [projectsView, setprojectsView] = useState("horizontal");

  let timeline = gsap.timeline();

  useEffect(() => {
    contentWrapperRef.current.classList.add(`${styles.horizontal_content}`);

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
      end: "300px 65%",
      scrub: 0.5,
    });
    // eslint-disable-next-line
  }, []);

  const changeProjectsView = (view) => {
    setprojectsView(view);
    if (view === "horizontal") {
      contentWrapperRef.current.classList.remove(`${styles.grid_content}`);
      contentWrapperRef.current.classList.add(`${styles.horizontal_content}`);
    } else if (view === "grid") {
      contentWrapperRef.current.classList.remove(
        `${styles.horizontal_content}`
      );
      contentWrapperRef.current.classList.add(`${styles.grid_content}`);
    }
  };

  return (
    <section name="projects" ref={sectionRef} className={`${styles.wrapper}`}>
      <SectionHeader name={"projects"} />
      <div className={`${styles.view_container}`}>
        <span>
          <MdViewCarousel
            className={`${styles.view_icon}`}
            onClick={() => changeProjectsView("horizontal")}
            style={{
              color: projectsView === "horizontal" && "var(--secondary)",
            }}
          />
        </span>
        <span>
          <BsGrid3X3GapFill
            className={`${styles.view_icon}`}
            onClick={() => changeProjectsView("grid")}
            style={{
              color: projectsView === "grid" && "var(--secondary)",
            }}
          />
        </span>
      </div>

      <div ref={contentWrapperRef} className={`${styles.content_wrapper}`}>
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
