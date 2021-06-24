import { useState, createContext, useRef, useEffect } from "react";
import "./App.css";
import Cookies from "js-cookie";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import Profile from "./sections/Profile/Profile";
import ExperienceAndEducation from "./sections/ExperienceAndEducation/ExperienceAndEducation";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Resume from "./sections/Resume/Resume";
import ExtraCurricularAndHobbies from "./sections/ExtraCurricularAndHobbies/ExtraCurricularAndHobbies";
import Footer from "./components/Footer/Footer";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
const StyledApp = styled.div``;

export const ThemeToggler = createContext();
export const Theme = createContext();

function App() {
  let appRef = useRef(null);
  let sectionRefs = new Array();

  useEffect(() => {
    if (Cookies.get("theme") === undefined) {
      Cookies.set("theme", "dark");
    }

    setTheme(Cookies.get("theme"));
    return () => {};
  }, []);

  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    let temp = theme === "light" ? "dark" : "light";
    Cookies.set("theme", temp);
    setTheme(temp);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <ThemeToggler.Provider value={toggleTheme}>
          <Theme.Provider value={theme}>
            <div ref={(el) => (appRef = el)} className="App">
              <Navbar />
              <Landing />
              <Profile />
              <ExperienceAndEducation />
              <Skills />
              <Projects />
              <ExtraCurricularAndHobbies />
              <Resume />
              <Contact />
              <Footer />
            </div>
          </Theme.Provider>
        </ThemeToggler.Provider>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
