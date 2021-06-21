import styles from "./ExperienceAndEducation.module.css";
import { EDUCATIONS } from "../../data/Education";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

function Education() {
  return (
    <div className={`${styles.half_wrapper} ${styles.education_wrapper}`}>
      <SectionHeader name={"education"} />
      <div className={`${styles.content_wrapper}`}>
        {EDUCATIONS.map((edu, key) => {
          return (
            <div key={key} className={`${styles.card}`}>
              <div className={`${styles.logo_org_box}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/education/${edu.logo}`}
                  className={`${styles.logo}`}
                />
                <h4 className={`${styles.organization}`}>{edu.name}</h4>
              </div>
              <p className={`${styles.primary_info}`}>{edu.degree}</p>
              <p className={`${styles.secondary_info}`}>
                <HiLocationMarker /> {edu.location}
              </p>
              <p className={`${styles.secondary_info}`}>
                <FaCalendarAlt /> {edu.duration}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
