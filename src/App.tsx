import { useState, useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";
import { Timeline } from "@mui/icons-material";
import FadeIn from "./components/FadeIn";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Project from "./components/Project";
import "./index.scss";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleIsDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Box
      className={`main-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <CssBaseline />
      <Navigation isDarkMode={isDarkMode} toggleIsDarkMode={toggleIsDarkMode} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
      </FadeIn>
      <Footer />
    </Box>
  );
}

export default App;
