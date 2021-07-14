import styles from "./Contact.module.css";
import React, { useRef, useEffect, useState, useContext } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import FormField from "../../components/FormField/FormField";
import Button from "../../components/Button/Button";
import ReCAPTCHA from "react-google-recaptcha";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SetLoader } from "../../App";
import {
  showErrorToastNotification,
  showSuccessToastNotification,
} from "../../components/ToastNotification";
import { apiSendMail } from "../../api/api";
import { validateContactForm } from "../../validators/contactValidator";
gsap.registerPlugin(ScrollTrigger);
function Contact() {
  let sectionRef = useRef(null);
  let imageRef = useRef(null);
  let reCaptchaRef = useRef(null);

  const setLoader = useContext(SetLoader);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

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
      state: name,
      setter: setname,
    },
    {
      type: "text",
      placeholder: "bruce@example.com",
      heading: "Email Address",
      sidenote: "The one where you tell me how I can contact you back",
      state: email,
      setter: setemail,
    },
    {
      type: "textarea",
      placeholder: "Hello mate!",
      heading: "Message",
      sidenote: "The one where you tell me what I can do for you",
      state: message,
      setter: setmessage,
    },
  ];

  const clickSubmit = async () => {
    // Form Validation
    let validation = validateContactForm(name, email, message);

    if (validation.status === false) {
      showErrorToastNotification(<p>🙄&nbsp;{validation.message}</p>);
      return;
    }

    // reCaptcha Validation
    if (reCaptchaRef.current.getValue() === "") {
      showErrorToastNotification(<p>🙄&nbsp;reCaptcha verification failed</p>);
      return;
    }

    let scrollYPosition = window.scrollY;

    setLoader(true);

    const resp = await apiSendMail({
      name: name,
      email: email,
      message: message,
      recaptcha: reCaptchaRef.current.getValue(),
    });

    reCaptchaRef.current.reset();

    setLoader(false);

    window.scrollTo(0, scrollYPosition);

    if (resp === undefined) {
      showErrorToastNotification(
        <p>😑&nbsp;Please try again after sometime</p>
      );
    } else {
      if (resp.status === 200) {
        showSuccessToastNotification(<p>😄&nbsp;{resp.data.message}</p>);
        setemail("");
        setname("");
        setmessage("");
      } else if (resp.status >= 400 && resp.status < 500) {
        showErrorToastNotification(<p>🙄&nbsp;{resp.data.message}</p>);
      } else if (resp.status >= 500 && resp.status < 600) {
        showErrorToastNotification(<p>😑&nbsp;{resp.data.message}</p>);
      }
    }
  };

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
                state={field.state}
                setter={field.setter}
              />
            );
          })}
          <div className={`${styles.recaptcha_container}`}>
            <ReCAPTCHA
              sitekey="6LcPDXIbAAAAANRl2Vy2duy9bivoP9z83L4vh-1J"
              theme="dark"
              size="normal"
              className={`${styles.recaptcha}`}
              ref={reCaptchaRef}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button text={"Contact"} onClickMethod={clickSubmit} />
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
