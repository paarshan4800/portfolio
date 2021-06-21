import styles from "./Terminal.module.css";
import TypeWriter from "../TypeWriter/TypeWriter";
import React from "react";

export default function Terminal() {
  return (
    <div className={`${styles.terminal}`}>
      <div className={`${styles.terminal_toolbar}`}>
        <div className={`${styles.toolbar_buttons}`}>
          <button
            className={`${styles.toolbar_button} ${styles.toolbar_button_exit}`}
          >
            &#10005;
          </button>
          <button className={`${styles.toolbar_button}`}>&#9472;</button>
          <button className={`${styles.toolbar_button}`}>&#9723;</button>
        </div>
        <p className={`${styles.toolbar_user}`}>cody@ubuntu:~</p>
      </div>
      <div className={`${styles.terminal_body}`}>
        <div className={`${styles.terminal_text}`}>Welcome to Ubuntu!</div>
        <div className={`${styles.terminal_prompt}`}>
          <span className={`${styles.prompt_user}`}>cody@ubuntu:</span>
          <span className={`${styles.prompt_location}`}>~</span>
          <span className={`${styles.prompt_dollar}`}>$</span>
          <span className={`${styles.prompt_cursor}`}></span>
          <TypeWriter />
        </div>
      </div>
    </div>
  );
}
