import styles from "./Footer.module.css";
import { FaHeart } from "react-icons/fa";
import { SOCIALICONS } from "../../data/SocialIcons";
import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className={`${styles.footer_wrapper}`}>
      <div className={`${styles.icons_container}`}>
        {SOCIALICONS.map((icon, index) => {
          return (
            <div key={index}>
              <SocialIcon
                network={icon.network}
                className={`${styles.social_icon}`}
                onClick={() => window.open(icon.url)}
              />
            </div>
          );
        })}
      </div>
      <div className={`${styles.text_container}`}>
        <p>Copyright {new Date().getFullYear()} Paargav Shanker</p>

        <p>
          Made with <FaHeart style={{ color: "red" }} /> in Chennai, India
        </p>
      </div>
    </div>
  );
}

export default Footer;
