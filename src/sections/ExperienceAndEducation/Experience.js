import styles from "./ExperienceAndEducation.module.css";
import { EXPERIENCES } from "../../data/Experience";
import React, { useRef, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useIntersection } from "react-use";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { gsap, Power3 } from "gsap";

function Experience() {
  let experiencesRef = new Array(EXPERIENCES.length);
  let sectionRef = useRef(null);
  let threshold = 0.5;

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  });

  // Animation for fading in
  const fadeIn = (elements) => {
    const timeline = gsap.timeline();

    for (let i = 0; i < elements.length; i++) {
      timeline.to(elements[i], {
        duration: 0.3,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        delay: 0.1,
      });
    }

    // gsap.to(element, {
    //   duration: 0.8,
    //   opacity: 1,
    //   ease: Power3.easeOut,
    //   delay: 2,
    // });
  };

  // Animation for fading out
  const fadeOut = (elements) => {
    const timeline = gsap.timeline();

    for (let i = elements.length - 1; i >= 0; i--) {
      timeline.to(elements[i], {
        duration: 0.3,
        opacity: 0,
        y: -50,
        ease: Power3.easeOut,
        delay: 0.1,
      });
    }

    // gsap.to(element, {
    //   duration: 0.8,
    //   opacity: 0,
    //   ease: Power3.easeOut,
    // });
  };

  useEffect(() => {
    // checking to see when the vieport is visible to the user
    intersection && intersection.intersectionRatio < threshold
      ? fadeOut(experiencesRef)
      : fadeIn(experiencesRef);
    return () => {};
  }, [intersection]);

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
