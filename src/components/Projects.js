import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";
import { data } from "./projectsData";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Projects = () => {
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
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ p: 2 }}
          marginTop={7}
        >
          <Typography variant="h3" gutterBottom>
            Personal Projects
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ p: 2 }}
        >
          {data.projects.map((project, key) => (
            <Card key={key} sx={{ maxWidth: 370, minWidth: 370, m: 2 }} raised>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.projectImage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.projectName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.projectDescription}
                  </Typography>

                  {project.projectTech.map((tech, key) => (
                    <Chip
                      key={key}
                      label={tech}
                      sx={{ m: 1 }}
                      color="primary"
                    />
                  ))}
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => window.open(project.projectLink, "_blank")}
                >
                  Project Link
                </Button>
                {project.liveDemo && (
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => window.open(project.liveDemo, "_blank")}
                  >
                    Live Demo
                  </Button>
                )}
                {project.playStoreLink && (
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => window.open(project.playStoreLink, "_blank")}
                  >
                    Google Play Link
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </Grid>
      </motion.div>
    </>
  );
};

export default Projects;
