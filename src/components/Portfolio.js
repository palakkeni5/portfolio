import React from "react";
import Home from "./Home";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import { Grid } from "@mui/material";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 10, behavior: "smooth" });
    }, 100);
  }, []);
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <section id="section-home">
            <Home />
          </section>
        </Grid>
        <Grid item>
          <section id="section-skills">
            <Skills />
          </section>
        </Grid>
        <Grid item>
          <section id="section-education">
            <Education />
          </section>
        </Grid>
        <Grid item>
          <section id="section-experience">
            <Experience />
          </section>
        </Grid>
        <Grid item>
          <section id="section-projects">
            <Projects />
          </section>
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
