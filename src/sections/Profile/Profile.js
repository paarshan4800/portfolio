import styles from "./Profile.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { SECTIONS } from "../../data/Sections";
import React from "react";

function Profile() {
  return (
    <section className={`${styles.wrapper}`}>
      <SectionHeader name={"profile"} />
      <div className={`${styles.content_wrapper}`}>
        <div className={`${styles.image_container}`}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/profile/profile_image.png`}
            className={`${styles.profile_image}`}
            alt={"Profile Image"}
          />
        </div>
        <div className={`${styles.text_container}`}>
          <p>Hey there! I am Paargav</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
