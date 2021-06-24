import styles from "./ProjectCard.module.css";
import { FaGithub, FaLink } from "react-icons/fa";
import React, { forwardRef } from "react";
import Badge from "../Badge/Badge";

const ProjectCard = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${styles.project_card}`}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/projects/${props.previewImg}`}
        className={`${styles.previewImg}`}
        alt={props.name}
      />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <div className={`${styles.tech_badges}`}>
        {props.workedOn.map((tech, key) => {
          return <Badge key={key} text={tech} />;
        })}
      </div>
      <p>
        {props.code != null && (
          <FaGithub
            className={`${styles.project_link}`}
            onClick={() => window.open(props.code)}
          />
        )}
        {props.hosted != null && (
          <FaLink
            className={`${styles.project_link}`}
            onClick={() => window.open(props.hosted)}
          />
        )}
      </p>
    </div>
  );
});

export default ProjectCard;
