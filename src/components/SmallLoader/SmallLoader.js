import React from "react";
import styles from "./SmallLoader.module.css";

function SmallLoader({ message }) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.loader}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {message && <p className={`${styles.text}`}>{message}</p>}
    </div>
  );
}

export default SmallLoader;
