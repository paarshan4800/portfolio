import styles from "./ProjectCard.module.css";
import { FaGithub, FaLink } from "react-icons/fa";
import React from "react";
import Badge from "../Badge/Badge";

function ProjectCard({
  name,
  description,
  workedOn,
  previewImg,
  code,
  hosted,
}) {
  return (
    <div style={{ color: "white" }} className={`${styles.project_card}`}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/projects/${previewImg}`}
        className={`${styles.previewImg}`}
      />
      <h4>{name}</h4>
      <p>{description}</p>
      <div className={`${styles.tech_badges}`}>
        {workedOn.map((tech, key) => {
          return <Badge key={key} text={tech} />;
        })}
      </div>
      <p>
        {code != null && (
          <FaGithub
            className={`${styles.project_link}`}
            onClick={() => window.open(code)}
          />
        )}
        {hosted != null && (
          <FaLink
            className={`${styles.project_link}`}
            onClick={() => window.open(hosted)}
          />
        )}
      </p>
    </div>
  );
}

export default ProjectCard;
