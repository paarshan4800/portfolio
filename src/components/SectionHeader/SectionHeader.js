import styles from "./SectionHeader.module.css";
import { SECTIONS } from "../../data/Sections";
import React from "react";

const SectionHeader = (props) => {
  const sections = {
    profile: 0,
    experience: 1,
    education: 2,
    volunteer_experience: 3,
    skills: 4,
    projects: 5,
    extra_curricular_hobbies: 6,
    resume: 7,
    contact: 8,
  };

  const { title, icon } = SECTIONS[sections[props.name]];
  return (
    <header className={`${styles.header}`}>
      <p className={`${styles.text}`}>
        {icon}&nbsp;{title}
      </p>
    </header>
  );
};

export default SectionHeader;
