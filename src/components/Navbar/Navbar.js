import styles from "./Navbar.module.css";
import { FaUserAlt, FaUniversity, FaDev, FaMoon } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { AiFillTrophy } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { HiDocument } from "react-icons/hi";

import { Link } from "react-scroll";
import ReactTooltip from "react-tooltip";

import React, { useContext } from "react";
import { ThemeToggler, Theme } from "../../App";

function Navbar() {
  const toggleTheme = useContext(ThemeToggler);
  const theme = useContext(Theme);

  const clickedBrand = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`${styles.navbarWrapper}`}>
      <div
        data-tip="Go to Top"
        onClick={clickedBrand}
        className={`${styles.brandContainer}`}
      >
        <p>PS</p>
      </div>
      <div className={`${styles.iconsContainer}`}>
        {/* Profile */}
        <p data-tip="About Me">
          <Link activeClass="navLinkActive" to="profile" spy={true}>
            <FaUserAlt className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Experience */}
        <p data-tip="Experience">
          <Link activeClass="navLinkActive" to="experience" spy={true}>
            <MdWork className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Education */}
        <p data-tip="Education">
          <Link activeClass="navLinkActive" to="education" spy={true}>
            <FaUniversity className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Skills */}
        <p data-tip="Skills">
          <Link activeClass="navLinkActive" to="skills" spy={true}>
            <BiCodeCurly className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Projects */}
        <p data-tip="Projects">
          <Link activeClass="navLinkActive" to="projects" spy={true}>
            <FaDev className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Extra Curricular and Hobbies */}
        <p data-tip="Extra Curricular and Hobbies">
          <Link
            activeClass="navLinkActive"
            to="extra-curricular-hobbies"
            spy={true}
          >
            <AiFillTrophy className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Resume */}
        <p data-tip="Resume">
          <Link activeClass="navLinkActive" to="resume" spy={true}>
            <HiDocument className={`${styles.icon}`} />
          </Link>
        </p>

        {/* Contact */}
        <p data-tip="Contact">
          <Link activeClass="navLinkActive" to="contact" spy={true}>
            <IoIosSend className={`${styles.icon}`} />
          </Link>
        </p>
      </div>
      <div data-tip="Toggle Theme" className={`${styles.themeIconContainer}`}>
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
      <ReactTooltip
        place="right"
        type="dark"
        effect="solid"
        clickable={false}
      />
    </div>
  );
}

export default Navbar;
