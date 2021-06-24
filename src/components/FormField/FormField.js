import React from "react";
import styles from "./FormField.module.css";

function FormField({ type, placeholder, heading, sidenote }) {
  return (
    <>
      {type === "text" ? (
        <div className={`${styles.form_container}`}>
          <p className={`${styles.heading}`}>{heading}</p>
          <input type={type} placeholder={placeholder} />
          <p className={`${styles.sidenote}`}>{sidenote}</p>
        </div>
      ) : (
        <div className={`${styles.form_container}`}>
          <p className={`${styles.heading}`}>{heading}</p>
          <textarea
            placeholder={placeholder}
            className={`${styles.textarea}`}
          />
          <p className={`${styles.sidenote}`}>{sidenote}</p>
        </div>
      )}
    </>
  );
}

export default FormField;
