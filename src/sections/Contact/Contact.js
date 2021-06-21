import styles from "./Contact.module.css";
import React from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import FormField from "../../components/FormField/FormField";
import Button from "../../components/Button/Button";

function Contact() {
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
      type: "text",
      placeholder: "Hello mate!",
      heading: "Message",
      sidenote: "The one where you tell me what I can do for you",
    },
  ];

  return (
    <section className={`${styles.wrapper}`}>
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
            src={`${process.env.PUBLIC_URL}/assets/images/contact/contact.svg`}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
