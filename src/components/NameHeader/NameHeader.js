import styles from "./NameHeader.module.css";
import { ThemeToggler } from "../../App";
import React, { useContext, forwardRef } from "react";

const NameHeader = forwardRef((props, ref) => {
  return (
    <header>
      <h1 ref={ref} className={`${styles.landing_text}`}>
        Paargav Shanker
      </h1>
    </header>
  );
});

export default NameHeader;
