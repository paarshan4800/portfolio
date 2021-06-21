import React from "react";
import styles from "./SkillCard.module.css";

function SkillCard({ logos, name, items }) {
  return (
    <div className={`${styles.skill_card}`}>
      <div className={`${styles.logo_box}`}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/skills/${logos[0]}`}
          className={`${styles.logo}`}
          alt={name}
        />
      </div>
      <div className={`${styles.content_box}`}>
        <h5>{name}</h5>
        <p>
          {items.map((item, key) => {
            return (
              <span key={key}>
                {item}&nbsp;{key < items.length - 1 && <>&#47; </>}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default SkillCard;
