import styles from "./ExtraCurricularAndHobbies.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ExtraCurricularAndHobbyCard from "../../components/ExtraCurricularAndHobbyCard/ExtraCurricularAndHobbyCard";
import { EXTRACURRICULARANDHOBBIES } from "../../data/ExtraCurricularAndHobbies";

import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function ExtraCurricularAndHobbies() {
  let sectionRef = useRef(null);
  let cardsRef = new Array(EXTRACURRICULARANDHOBBIES.length);

  useEffect(() => {
    const timeline = gsap.timeline();

    for (let i = 0; i < cardsRef.length; i++) {
      timeline.from(cardsRef[i], {
        duration: 0.5,
        opacity: 0,
        ease: Power3.easeOut,
      });
    }

    ScrollTrigger.create({
      trigger: sectionRef.current,
      animation: timeline,
      start: "top 80%",
      end: "center 70%",
      scrub: 0.5,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <section
      ref={sectionRef}
      name="extra-curricular-hobbies"
      className={`${styles.wrapper}`}
    >
      <SectionHeader name={"extra_curricular_hobbies"} />
      <div className={`${styles.content_wrapper}`}>
        {EXTRACURRICULARANDHOBBIES.map((item, key) => {
          return (
            <ExtraCurricularAndHobbyCard
              ref={(el) => (cardsRef[key] = el)}
              key={key}
              title={item.title}
              image={item.image}
              descriptions={item.descriptions}
              url={item?.url}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ExtraCurricularAndHobbies;
