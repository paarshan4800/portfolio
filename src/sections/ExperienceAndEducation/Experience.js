import styles from "./ExperienceAndEducation.module.css";
import { EXPERIENCES } from "../../data/Experience";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

function Experience() {
  return (
    <div className={`${styles.half_wrapper}`}>
      <SectionHeader name={"experience"} />
      <div className={`${styles.content_wrapper}`}>
        {EXPERIENCES.map((exp, key) => {
          return (
            <div key={key} className={`${styles.card}`}>
              <div className={`${styles.logo_org_box}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/experience/${exp.logo}`}
                  className={`${styles.logo}`}
                />
                <h4 className={`${styles.organization}`}>{exp.organization}</h4>
              </div>
              <p className={`${styles.primary_info}`}>{exp.role}</p>
              <p className={`${styles.secondary_info}`}>
                <FaCalendarAlt /> {exp.duration}
              </p>
              <p className={`${styles.secondary_info}`}>
                <span style={{ fontWeight: "900" }}>Worked in:</span>{" "}
                {exp.workedIn}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
