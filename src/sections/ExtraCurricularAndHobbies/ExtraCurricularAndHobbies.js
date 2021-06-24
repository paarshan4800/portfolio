import styles from "./ExtraCurricularAndHobbies.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ExtraCurricularAndHobbyCard from "../../components/ExtraCurricularAndHobbyCard/ExtraCurricularAndHobbyCard";
import { EXTRACURRICULARANDHOBBIES } from "../../data/ExtraCurricularAndHobbies";

import React from "react";

function ExtraCurricularAndHobbies() {
  return (
    <section name="extra-curricular-hobbies" className={`${styles.wrapper}`}>
      <SectionHeader name={"profile"} />
      <div className={`${styles.content_wrapper}`}>
        {EXTRACURRICULARANDHOBBIES.map((item, key) => {
          return (
            <ExtraCurricularAndHobbyCard
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
