import styles from "./ExperienceAndEducation.module.css";
import React, { useRef, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VOLUNTEER_EXPERIENCES } from "../../data/VolunteerExperiences";

gsap.registerPlugin(ScrollTrigger);
function VolunteerExperience() {
  let experiencesRef = new Array(VOLUNTEER_EXPERIENCES.length);
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
      scrub: 0.5,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div
      name="volunteer_experience"
      ref={sectionRef}
      className={`${styles.half_wrapper}`}
    >
      <SectionHeader name={"volunteer_experience"} />
      <div className={`${styles.content_wrapper}`}>
        {VOLUNTEER_EXPERIENCES.map((exp, key) => {
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
                  alt={exp.organization}
                />
                <h4 className={`${styles.organization}`}>{exp.organization}</h4>
              </div>
              <p className={`${styles.primary_info}`}>{exp.role}</p>
              <p className={`${styles.secondary_info}`}>
                <FaCalendarAlt /> {exp.duration}
              </p>
              {exp.hasOwnProperty("workedIn") && <p className={`${styles.secondary_info}`}>
                <span style={{ fontWeight: "900" }}>Worked in:</span>{" "}
                {exp.workedIn}
              </p>}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className={`${styles.highlights}`}>
                  {exp.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VolunteerExperience;
