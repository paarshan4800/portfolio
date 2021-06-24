import styles from "./SectionHeader.module.css";
import { SECTIONS } from "../../data/Sections";
import React from "react";

const SectionHeader = (props) => {
  const sections = {
    profile: 0,
    experience: 1,
    education: 2,
    skills: 3,
    projects: 4,
    achievements: 5,
    resume: 6,
    contact: 7,
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
