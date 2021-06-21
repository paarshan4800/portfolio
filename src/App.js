import { useState, createContext, useRef, useEffect } from "react";

import "./App.css";

import Landing from "./sections/Landing/Landing";
import Profile from "./sections/Profile/Profile";
import ExperienceAndEducation from "./sections/ExperienceAndEducation/ExperienceAndEducation";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Resume from "./sections/Resume/Resume";
import TypeWriter from "./components/TypeWriter/TypeWriter";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import { gsap } from "gsap";
const StyledApp = styled.div``;

export const ThemeToggler = createContext();

function App() {
  let appRef = useRef(null);

  useEffect(() => {
    return () => {};
  }, []);

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <ThemeToggler.Provider value={toggleTheme}>
          <div ref={(el) => (appRef = el)} className="App">
            <Landing />
            <Profile />
            <ExperienceAndEducation />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </div>
        </ThemeToggler.Provider>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
