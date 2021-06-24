import styles from "./ExperienceAndEducation.module.css";
import { EDUCATIONS } from "../../data/Education";
import React, { useEffect, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Education() {
  let educationsRef = new Array(EDUCATIONS.length);
  let sectionRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    for (let i = 0; i < educationsRef.length; i++) {
      timeline.from(educationsRef[i], {
        duration: 0.5,
        opacity: 0,
        y: -50,
        ease: Power3.easeOut,
      });
    }

    ScrollTrigger.create({
      trigger: sectionRef.current,
      animation: timeline,
      start: "top 80%",
      end: "center 60%",
      // markers: true,
      scrub: 0.5,
    });
  }, []);

  return (
    <div
      name="education"
      ref={sectionRef}
      className={`${styles.half_wrapper} ${styles.education_wrapper}`}
    >
      <SectionHeader name={"education"} />
      <div className={`${styles.content_wrapper}`}>
        {EDUCATIONS.map((edu, key) => {
          return (
            <div
              ref={(el) => (educationsRef[key] = el)}
              key={key}
              className={`${styles.card}`}
            >
              <div className={`${styles.logo_org_box}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/education/${edu.logo}`}
                  className={`${styles.logo}`}
                  alt={edu.name}
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
