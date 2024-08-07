import React, { useState, Suspense } from "react";
import Typewriter from "typewriter-effect";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const data = {
  name: "Palak Pramod Keni",
  roles: [
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer",
    "Software Engineer",
    "Full Stack Developer",
  ],
};

const Home = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            marginTop={10}
          >
            <Grid item xs={6} sx={{ mt: 5, ml: 5, mr: 5 }}>
              <Typography variant="h1" gutterBottom>
                {data?.name}
              </Typography>
            </Grid>

            <Grid item xs={1} sx={{ mt: 10 }}>
              <Typography variant="h4" gutterBottom>
                I&apos;m&nbsp; a{" "}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h4" gutterBottom>
                <Typewriter
                  options={{
                    loop: true,
                    autoStart: true,
                    strings: data?.roles,
                  }}
                />
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ mt: 10, mb: 10 }}>
              <Tooltip title="https://www.linkedin.com/in/palak-keni/">
                <IconButton
                  sx={{ mr: 3, ml: 3 }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/palak-keni/",
                      "_blank"
                    )
                  }
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="palakkeni@gmail.com">
                <IconButton
                  sx={{ mr: 3, ml: 3 }}
                  onClick={(e) => {
                    window.location = "mailto:palakkeni@gmail.com";
                  }}
                >
                  <EmailIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="https://github.com/palakkeni5">
                <IconButton
                  sx={{ mr: 3, ml: 3 }}
                  onClick={() =>
                    window.open("https://github.com/palakkeni5", "_blank")
                  }
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </>
  );
};

export default Home;
