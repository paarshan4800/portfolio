import styles from "./Button.module.css";
import React from "react";

function Button({ text }) {
  return <button className={`${styles.button}`}>{text}</button>;
}

export default Button;
