import styles from "./ExtraCurricularAndHobbyCard.module.css";
import { SocialIcon } from "react-social-icons";
import { FaSpotify } from "react-icons/fa";
import React, { forwardRef } from "react";

const ExtraCurricularAndHobbyCard = forwardRef((props, ref) => {
  return (
    <div className={`${styles.card}`}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/extra-curricular-hobbies/${props.image}`}
        className={`${styles.image}`}
        alt={props.title}
      />
      <p className={`${styles.title}`}>{props.title}</p>
      <ul>
        {props.descriptions.map((description, key) => {
          return (
            <li key={key} className={`${styles.description}`}>
              {description}
            </li>
          );
        })}
      </ul>
      {props.url && (
        <div className={`${styles.icon_box}`}>
          <FaSpotify
            className={`${styles.icon}`}
            onClick={() => window.open(props.url)}
          />
        </div>
      )}
    </div>
  );
});

export default ExtraCurricularAndHobbyCard;
