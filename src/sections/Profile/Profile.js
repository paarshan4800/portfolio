import styles from "./Profile.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE } from "../../data/Profile";

gsap.registerPlugin(ScrollTrigger);

const Profile = React.forwardRef((props, ref) => {
  let sectionRef = useRef(null);
  let imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "center 50%",
        scrub: 0.5,
      },
      duration: 1,
      opacity: 0,
      x: "-50vw",
      ease: Power3.easeOut,
    });
    return () => {};
  }, []);

  return (
    <section name="profile" ref={sectionRef} className={`${styles.wrapper}`}>
      <SectionHeader name={"profile"} />
      <div className={`${styles.content_wrapper}`}>
        <div className={`${styles.image_container}`}>
          <img
            ref={(el) => (imageRef = el)}
            src={`${process.env.PUBLIC_URL}/assets/images/profile/profile_image.svg`}
            className={`${styles.profile_image} `}
            alt={"Profile Pic"}
          />
        </div>
        <div className={`${styles.text_container} `}>
          {PROFILE.map((content, key) => {
            return <p key={key}>{content}</p>;
          })}
        </div>
      </div>
    </section>
  );
});

export default Profile;
