import styles from "./Projects.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { PROJECTS } from "../../data/Projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import React from "react";

function Projects() {
  return (
    <section className={`${styles.wrapper}`}>
      <SectionHeader name={"projects"} />
      <div className={`${styles.content_wrapper} ${styles.scrollbar}`}>
        {PROJECTS.map((project, key) => {
          return (
            <ProjectCard
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
