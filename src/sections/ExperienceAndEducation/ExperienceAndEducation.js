import styles from "./ExperienceAndEducation.module.css";
import Experience from "./Experience";
import Education from "./Education";

import React from "react";
import VolunteerExperience from "./VolunteerExperience";

function ExperienceAndEducation() {
  return (
    <section className={`${styles.wrapper}`}>
      <Experience />
      <Education />
      <VolunteerExperience />
    </section>
  );
}

export default ExperienceAndEducation;
