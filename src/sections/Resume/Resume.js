import styles from "./Resume.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import React, { useRef, useEffect } from "react";
import Button from "../../components/Button/Button";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import QR from "../../components/QR/QR";

gsap.registerPlugin(ScrollTrigger);
function Resume() {
  let sectionRef = useRef(null);
  let imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef, {
      scrollTrigger: {
        trigger: sectionRef,
        start: "top 80%",
        end: "center 50%",
        scrub: 0.5,
      },
      duration: 1,
      opacity: 0,
      x: "-50vw",
      ease: Power3.easeOut,
    });
    return () => {};
  }, []);

  return (
    <section
      ref={(el) => (sectionRef = el)}
      name="resume"
      className={`${styles.wrapper}`}
    >
      <SectionHeader name={"resume"} />
      <div className={`${styles.content_wrapper}`}>
        <div className={`${styles.image_container}`}>
          <img
            ref={(el) => (imageRef = el)}
            src={`${process.env.PUBLIC_URL}/assets/images/resume/resume.jpg`}
            className={`${styles.resume_image}`}
            alt={"Resume"}
          />
        </div>
        <div className={`${styles.text_container}`}>
          <p>
            To those HRs out there who need a more organized and minimal version
            of my information, you can download the trusted PDF version here
          </p>
          <div className={`${styles.button_container}`}>
            <Button text={"Download Resume"} />
          </div>
          <p className={`${styles.or_divider}`} style={{ textAlign: "center" }}>
            OR
          </p>
          <div>
            <QR />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
