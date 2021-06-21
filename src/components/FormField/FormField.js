import React from "react";
import styles from "./FormField.module.css";

function FormField({ type, placeholder, heading, sidenote }) {
  return (
    <div className={`${styles.form_container}`}>
      <p className={`${styles.heading}`}>{heading}</p>
      <input type={type} placeholder={placeholder} />
      <p className={`${styles.sidenote}`}>{sidenote}</p>
    </div>
  );
}

export default FormField;
