import styles from "./Resume.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import React from "react";
import Button from "../../components/Button/Button";

function Resume() {
  return (
    <section name="resume" className={`${styles.wrapper}`}>
      <SectionHeader name={"resume"} />
      <div className={`${styles.content_wrapper}`}>
        <div className={`${styles.image_container}`}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/resume/resume.jpg`}
            className={`${styles.resume_image}`}
            alt={"Profile Image"}
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
        </div>
      </div>
    </section>
  );
}

export default Resume;
