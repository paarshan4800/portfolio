import styles from "./Contact.module.css";
import React, { useRef, useEffect } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import FormField from "../../components/FormField/FormField";
import Button from "../../components/Button/Button";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Contact() {
  let sectionRef = useRef(null);
  let imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef, {
      scrollTrigger: {
        trigger: sectionRef,
        start: "25% 80%",
        end: "50% 50%",
        scrub: 0.5,
      },
      duration: 1,
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
    });
    return () => {};
  }, []);

  const INPUTFIELDS = [
    {
      type: "text",
      placeholder: "Bruce Wayne",
      heading: "Full Name",
      sidenote: "The one where you tell me your name",
    },
    {
      type: "text",
      placeholder: "bruce@example.com",
      heading: "Email Address",
      sidenote: "The one where you tell me how I can contact you back",
    },
    {
      type: "textarea",
      placeholder: "Hello mate!",
      heading: "Message",
      sidenote: "The one where you tell me what I can do for you",
    },
  ];

  return (
    <section
      ref={(el) => (sectionRef = el)}
      name="contact"
      className={`${styles.wrapper}`}
    >
      <SectionHeader name={"contact"} />
      <div className={`${styles.content_wrapper}`}>
        <div className={`${styles.form_container}`}>
          {INPUTFIELDS.map((field, key) => {
            return (
              <FormField
                key={key}
                type={field.type}
                placeholder={field.placeholder}
                heading={field.heading}
                sidenote={field.sidenote}
              />
            );
          })}
          <div style={{ textAlign: "center" }}>
            <Button text={"Contact"} />
          </div>
        </div>
        <div className={`${styles.image_container}`}>
          <img
            ref={(el) => (imageRef = el)}
            src={`${process.env.PUBLIC_URL}/assets/images/contact/contact.svg`}
            alt={"contact_svg"}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
