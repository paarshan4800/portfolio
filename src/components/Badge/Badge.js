import styles from "./Badge.module.css";

import React from "react";

function Badge({ text }) {
  return <span className={`${styles.badge}`}>{text}</span>;
}

export default Badge;
