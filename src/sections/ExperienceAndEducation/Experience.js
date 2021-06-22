import styles from "./ExperienceAndEducation.module.css";
import { EXPERIENCES } from "../../data/Experience";
import React, { useRef, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Experience() {
  let experiencesRef = new Array(EXPERIENCES.length);
  let sectionRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    for (let i = 0; i < experiencesRef.length; i++) {
      timeline.from(experiencesRef[i], {
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
      end: "center 50%",
      // markers: true,
      scrub: 0.5,
    });
  }, []);

  return (
    <div ref={sectionRef} className={`${styles.half_wrapper}`}>
      <SectionHeader name={"experience"} />
      <div className={`${styles.content_wrapper}`}>
        {EXPERIENCES.map((exp, key) => {
          return (
            <div
              ref={(el) => (experiencesRef[key] = el)}
              key={key}
              className={`${styles.card}`}
            >
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
