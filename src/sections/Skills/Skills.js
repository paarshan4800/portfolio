import React, { useRef, useEffect } from "react";
import styles from "./Skills.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SkillCard from "../../components/SkillCard/SkillCard";
import { SKILLS } from "../../data/Skills";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Skills() {
  let sectionRef = useRef(null);
  let skillsRef = new Array(SKILLS.length);

  useEffect(() => {
    const timeline = gsap.timeline();

    for (let i = 0; i < skillsRef.length; i++) {
      timeline.from(skillsRef[i], {
        duration: 0.5,
        opacity: 0,
        ease: Power3.easeOut,
      });
    }

    ScrollTrigger.create({
      trigger: sectionRef.current,
      animation: timeline,
      start: "top 80%",
      end: "75% 70%",
      scrub: 0.5,
    });
  }, []);

  return (
    <section name="skills" ref={sectionRef} className={`${styles.wrapper}`}>
      <SectionHeader name={"skills"} />
      <div className={`${styles.content_wrapper}`}>
        {SKILLS.map((skill, key) => {
          return (
            <SkillCard
              key={key}
              ref={(el) => (skillsRef[key] = el)}
              logos={skill.logos}
              name={skill.name}
              items={skill.items}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
