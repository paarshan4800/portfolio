import styles from "./Button.module.css";
import React from "react";

function Button({ text, onClickMethod }) {
  return (
    <button className={`${styles.button}`} onClick={() => onClickMethod()}>
      {text}
    </button>
  );
}

export default Button;
