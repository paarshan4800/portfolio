import styles from "./Navbar.module.css";
import { FaUserAlt, FaUniversity, FaDev, FaMoon } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { AiFillTrophy } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { FiSun, FiActivity } from "react-icons/fi";
import { HiDocument } from "react-icons/hi";

import { Link, animateScroll } from "react-scroll";

import React, { useContext, useRef, useEffect } from "react";
import { ThemeToggler, Theme, Width } from "../../App";
import { gsap, Power3 } from "gsap";

function Navbar() {
  const toggleTheme = useContext(ThemeToggler);
  const theme = useContext(Theme);
  const width = useContext(Width);

  let brandRef = useRef(null);
  let iconsRef = useRef(null);
  let themeIconRef = useRef(null);

  useEffect(() => {
    return () => {};
  }, []);

  const clickedBrand = () => {
    if (width > 767) {
      window.scrollTo(0, 0);
    } else {
      // iconsRef.style.visibility = "visible";
      // themeIconRef.style.visibility = "visible";
      gsap.to([iconsRef, themeIconRef], {
        duration: 10,
        css: {
          visibility: "visible",
        },
        ease: Power3.easeOut,
      });
    }
  };

  return (
    <div className={`${styles.navbarWrapper}`}>
      <div
        ref={(el) => (brandRef = el)}
        onClick={clickedBrand}
        className={`${styles.brandContainer}`}
      >
        <p>PS</p>
      </div>
      <div ref={(el) => (iconsRef = el)} className={`${styles.iconsContainer}`}>
        {/* Profile */}
        <p>
          <Link activeClass="navLinkActive" to="profile" spy={true}>
            <FaUserAlt className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Experience */}
        <p>
          <Link activeClass="navLinkActive" to="experience" spy={true}>
            <MdWork className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Education */}
        <p>
          <Link activeClass="navLinkActive" to="education" spy={true}>
            <FaUniversity className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Skills */}
        <p>
          <Link activeClass="navLinkActive" to="skills" spy={true}>
            <BiCodeCurly className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Projects */}
        <p>
          <Link activeClass="navLinkActive" to="projects" spy={true}>
            <FaDev className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Extra Curricular and Hobbies */}
        <p>
          <Link
            activeClass="navLinkActive"
            to="extra-curricular-hobbies"
            spy={true}
          >
            <AiFillTrophy className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Resume */}
        <p>
          <Link activeClass="navLinkActive" to="resume" spy={true}>
            <HiDocument className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Contact */}
        <p>
          <Link activeClass="navLinkActive" to="contact" spy={true}>
            <IoIosSend className={`${styles.icon}`} />
          </Link>
        </p>
      </div>
      <div
        ref={(el) => (themeIconRef = el)}
        className={`${styles.themeIconContainer}`}
      >
        {theme === "dark" ? (
          <p>
            <FaMoon onClick={toggleTheme} />
          </p>
        ) : (
          <p>
            <FiSun onClick={toggleTheme} />
          </p>
        )}
      </div>
    </div>
  );
}

export default Navbar;
