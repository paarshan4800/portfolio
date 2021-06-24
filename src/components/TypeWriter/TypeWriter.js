import styles from "./TypeWriter.module.css";

import React, { forwardRef } from "react";

const TypeWriter = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${styles.writer_container}`}>
      <p className={`${styles.first_line}`}>
        <span>const</span> paargav: Array&lt;<span>Ingredients</span>&gt; = [
      </p>
      <p className={`${styles.second_line}`}>
        <span>Designer</span>, <span>Developer</span>, <span>Writer</span>,
      </p>
      <p className={`${styles.third_line}`}>
        <span>Sugar</span>, <span>Spice</span>, ...<span>everythingNice</span>,
      </p>
      <p className={`${styles.fourth_line}`}>];</p>
    </div>
  );
});

export default TypeWriter;
