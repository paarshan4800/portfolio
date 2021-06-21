import styles from "./SectionHeader.module.css";
import { SECTIONS } from "../../data/Sections";
import React from "react";

function SectionHeader({ name }) {
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

  const iconStyle = {
    color: "blue",
  };

  const { title, icon } = SECTIONS[sections[name]];
  return (
    <header className={`${styles.header}`}>
      <p className={`${styles.text}`}>
        {icon}&nbsp;{title}
      </p>
    </header>
  );
}

export default SectionHeader;
