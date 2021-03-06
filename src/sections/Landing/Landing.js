import styles from "./Landing.module.css";
import { SocialIcon } from "react-social-icons";
import NameHeader from "../../components/NameHeader/NameHeader";
import React, { useRef, useEffect, forwardRef } from "react";
import TypeWriter from "../../components/TypeWriter/TypeWriter";
import { SOCIALICONS } from "../../data/SocialIcons";
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { gsap, Power3 } from "gsap";

const Landing = forwardRef((props, ref) => {
  let imageRef = useRef(null);
  let nameRef = useRef(null);
  let writerRef = useRef(null);
  let iconRefs = new Array(SOCIALICONS.length);

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
    timeline.to({}, 3.2, {});

    // Social Icons
    for (let i = 0; i < iconRefs.length; i++) {
      timeline.from(iconRefs[i], {
        duration: 0.2,
        opacity: 0,
        ease: Power3.easeOut,
      });
    }

    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <HelmetProvider>
      <section ref={ref} className={`${styles.wrapper}`}>
        <Helmet
          meta={[
            {
              name: "description",
              content:
                "My name is Paargav Shanker. I am studying Computer Science and Engineering at College of Engineering, Guindy. This is my Portfolio.",
            },
            {
              property: `og:title`,
              content: "Paargav Shanker's Portfolio",
            },
            {
              property: `og:description`,
              content:
                "My name is Paargav Shanker. I am studying Computer Science and Engineering at College of Engineering, Guindy. This is my Portfolio.",
            },
            {
              property: `og:type`,
              content: `website`,
            },
          ]}
        />

        <div className={`${styles.image_container}`}>
          <img
            ref={(el) => (imageRef = el)}
            src={`${process.env.PUBLIC_URL}/assets/images/landing/profile_paargav.png`}
            className={`${styles.profile_image}`}
            alt={"Paargav Shanker"}
          />
        </div>
        <div className={`${styles.profile_container}`}>
          <NameHeader ref={nameRef} />
          <TypeWriter ref={writerRef} />
          <div className={`${styles.social_icons_container}`}>
            {SOCIALICONS.map((icon, index) => {
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
    </HelmetProvider>
  );
});

export default Landing;
