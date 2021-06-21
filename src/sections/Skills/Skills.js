import React from "react";
import styles from "./Skills.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SkillCard from "../../components/SkillCard/SkillCard";
import { SKILLS } from "../../data/Skills";

function Skills() {
  return (
    <section className={`${styles.wrapper}`}>
      <SectionHeader name={"skills"} />
      <div className={`${styles.content_wrapper}`}>
        {SKILLS.map((skill, key) => {
          return (
            <SkillCard
              key={key}
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
