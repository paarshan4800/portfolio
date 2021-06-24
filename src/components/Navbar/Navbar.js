import styles from "./Navbar.module.css";
import { FaUserAlt, FaUniversity, FaDev, FaMoon } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { AiFillTrophy } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { FiSun, FiActivity } from "react-icons/fi";
import { HiDocument } from "react-icons/hi";

import { Link } from "react-scroll";

import React, { useContext } from "react";
import { ThemeToggler, Theme } from "../../App";

function Navbar() {
  const toggleTheme = useContext(ThemeToggler);
  const theme = useContext(Theme);

  return (
    <div className={`${styles.navbarWrapper}`}>
      <div className={`${styles.brandContainer}`}>
        <p>PS</p>
      </div>
      <div className={`${styles.iconsContainer}`}>
        {/* Profile */}
        <p>
          <Link activeClass="navLinkActive" to="profile" spy={true}>
            <FaUserAlt />
          </Link>
        </p>

        {/* Experience */}
        <p>
          <Link activeClass="navLinkActive" to="experience" spy={true}>
            <MdWork />
          </Link>
        </p>

        {/* Education */}
        <p>
          <Link activeClass="navLinkActive" to="education" spy={true}>
            <FaUniversity />
          </Link>
        </p>

        {/* Skills */}
        <p>
          <Link activeClass="navLinkActive" to="skills" spy={true}>
            <BiCodeCurly />
          </Link>
        </p>

        {/* Projects */}
        <p>
          <Link activeClass="navLinkActive" to="projects" spy={true}>
            <FaDev />
          </Link>
        </p>

        {/* Extra Curricular and Hobbies */}
        <p>
          <Link
            activeClass="navLinkActive"
            to="extra-curricular-hobbies"
            spy={true}
          >
            <AiFillTrophy />
          </Link>
        </p>

        {/* Resume */}
        <p>
          <Link activeClass="navLinkActive" to="resume" spy={true}>
            <HiDocument />
          </Link>
        </p>

        {/* Contact */}
        <p>
          <Link activeClass="navLinkActive" to="contact" spy={true}>
            <IoIosSend />
          </Link>
        </p>
      </div>
      <div className={`${styles.themeIconContainer}`}>
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
