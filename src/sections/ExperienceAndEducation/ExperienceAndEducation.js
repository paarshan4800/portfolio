import styles from "./ExperienceAndEducation.module.css";
import Experience from "./Experience";
import Education from "./Education";

import React from "react";

function ExperienceAndEducation() {
  return (
    <section className={`${styles.wrapper}`}>
      <Experience />
      <Education />
    </section>
  );
}

export default ExperienceAndEducation;
