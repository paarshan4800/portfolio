import styles from "./Profile.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Profile() {
  let sectionRef = useRef(null);
  let threshold = 0.5;
  let imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "center 50%",
        scrub: 0.5,
        // markers: true,
      },
      duration: 1,
      opacity: 0,
      x: "-50vw",
      ease: Power3.easeOut,
    });
    return () => {};
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.wrapper}`}>
      <SectionHeader name={"profile"} />
      <div className={`${styles.content_wrapper}`}>
        <div className={`${styles.image_container}`}>
          <img
            ref={(el) => (imageRef = el)}
            src={`${process.env.PUBLIC_URL}/assets/images/profile/profile_image.png`}
            className={`${styles.profile_image} fadeIn`}
            alt={"Profile Image"}
          />
        </div>
        <div className={`${styles.text_container} fadeIn`}>
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
