import styles from "./Landing.module.css";
import { SocialIcon } from "react-social-icons";
import NameHeader from "../../components/NameHeader/NameHeader";
import React, { useRef, useEffect } from "react";
import TypeWriter from "../../components/TypeWriter/TypeWriter";

import { gsap, Power3 } from "gsap";

function Landing() {
  let imageRef = useRef(null);
  let nameRef = useRef(null);
  let writerRef = useRef(null);
  let iconRefs = [];

  let timeline = gsap.timeline();

  useEffect(() => {
    writerRef.current.style.visibility = "hidden";

    // Image
    timeline.from(imageRef, {
      duration: 1,
      opacity: 0,
      ease: Power3.easeOut,
    });

    // Name
    timeline.from(nameRef.current, {
      duration: 0.8,
      opacity: 0,
      ease: Power3.easeOut,
    });

    //
    timeline.to(writerRef.current, {
      duration: 0,
      ease: Power3.easeOut,
      css: {
        visibility: "visible",
      },
    });

    // Add the animation classes to type writer lines
    // let classNames = ["first_line", "second_line", "third_line"];

    // for (let i = 0; i < writerRef.current.children.length; i++) {
    //   writerRef.current.children[i].classList.add(classNames[i]);
    //   console.log(writerRef.current.children[i].classList);
    // }

    // Simulate Pause for writer effect to finish
    timeline.to({}, 4, {});

    // Social Icons
    for (let i = 0; i < iconRefs.length; i++) {
      timeline.from(iconRefs[i], {
        duration: 0.2,
        opacity: 0,
        ease: Power3.easeOut,
      });
    }

    // timeline.from();

    return () => {};
  }, []);
  const socialIcons = [
    {
      url: "https://www.linkedin.com/in/paargav-shanker-b6708a194/",
      network: "linkedin",
    },
    {
      url: "https://github.com/paarshan4800",
      network: "github",
    },
    {
      url: "https://www.instagram.com/paar_shan4800/",
      network: "instagram",
    },
    {
      url: "https://twitter.com/paarshan4800",
      network: "twitter",
    },
    {
      url: "https://www.facebook.com/paargav.shuttle",
      network: "facebook",
    },
  ];

  return (
    <section className={`${styles.wrapper}`}>
      <div className={`${styles.image_container}`}>
        <img
          ref={(el) => (imageRef = el)}
          src={`${process.env.PUBLIC_URL}/assets/images/landing/circle_image.png`}
          className={`${styles.profile_image}`}
          alt={"Paargav Shanker"}
        />
      </div>
      <div className={`${styles.profile_container}`}>
        <NameHeader ref={nameRef} />
        <TypeWriter ref={writerRef} />
        <div className={`${styles.social_icons_container}`}>
          {socialIcons.map((icon, index) => {
            return (
              <div ref={(el) => (iconRefs[index] = el)} key={index}>
                <SocialIcon
                  network={icon.network}
                  className={`${styles.social_icon}`}
                  onClick={() => window.open(icon.url)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Landing;
