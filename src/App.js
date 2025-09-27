import { useState, createContext, useEffect } from "react";
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
// import SEO from "./components/SEO";

import { apiWakeUp } from "./api/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import Loader from "./components/Loader/Loader";
const StyledApp = styled.div``;

export const ThemeToggler = createContext();
export const Theme = createContext();
export const Width = createContext();

toast.configure();
function App() {
  const [theme, setTheme] = useState();
  const [width, setwidth] = useState(0);
  const [imagesLoaded, setimagesLoaded] = useState(false);

  useEffect(() => {
    const loadImage = () => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = `${process.env.PUBLIC_URL}/assets/images/landing/profile_paargav.png`;

        loadImg.onload = () => {
          resolve(
            `${process.env.PUBLIC_URL}/assets/images/landing/profile_paargav.png`
          );
        };

        loadImg.onerror = (err) => {
          reject(err);
        };
      });
    };

    loadImage()
      .then(() => {
        setimagesLoaded(true);
      })
      .catch((err) => console.log("Failed to load images", err));
    return () => {};
  }, []);

  useEffect(() => {
    if (process.env.REACT_APP_ENV === "prod") {
      apiWakeUp();
    }

    if (Cookies.get("theme") === undefined) {
      Cookies.set("theme", "dark");
    }
    setTheme(Cookies.get("theme"));

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.addEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setwidth(window.innerWidth);
  };

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
            <Width.Provider value={width}>
              {/* <SEO /> */}
              {!imagesLoaded && <Loader message={"Awesomeness Loading 🙂"} />}

              <div className="App">
                {imagesLoaded && (
                  <>
                    <Navbar />
                    <Landing />
                    <Profile />
                    <ExperienceAndEducation />
                    <Skills />
                    <Projects />
                    {/* <ExtraCurricularAndHobbies /> */}
                    <Resume />
                    {/* <Contact /> */}
                    <Footer />
                  </>
                )}
              </div>
            </Width.Provider>
          </Theme.Provider>
        </ThemeToggler.Provider>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
