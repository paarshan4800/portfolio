import { FaUserAlt, FaUniversity, FaDev } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { AiFillTrophy } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { HiDocument } from "react-icons/hi";

import styles from "../components/SectionHeader/SectionHeader.module.css";

export const SECTIONS = [
  {
    title: "Profile",
    icon: <FaUserAlt className={`${styles.sectionIcon}`} />,
  },
  {
    title: "Experience",
    icon: <MdWork className={`${styles.sectionIcon}`} />,
  },
  {
    title: "Education",
    icon: <FaUniversity className={`${styles.sectionIcon}`} />,
  },
  {
    title: "Skills",
    icon: <BiCodeCurly className={`${styles.sectionIcon}`} />,
  },
  {
    title: "Projects",
    icon: <FaDev className={`${styles.sectionIcon}`} />,
  },
  {
    title: "Extra Curricular and Hobbies",
    icon: <AiFillTrophy className={`${styles.sectionIcon}`} />,
  },
  {
    title: "Resume",
    icon: <HiDocument className={`${styles.sectionIcon}`} />,
  },
  {
    title: "Contact",
    icon: <IoIosSend className={`${styles.sectionIcon}`} />,
  },
];
