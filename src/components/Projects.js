import React, { useState, useEffect, useContext } from "react";
import Stack from "@mui/material/Stack";
import { Grid, ListItem } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";
import { data } from "./projectsData";

const Projects = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ p: 2 }}
        marginTop={10}
      >
        <Typography variant="h3" gutterBottom>
          Projects
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ p: 2 }}
      >
        {data.projects.map((project) => (
          <Card sx={{ maxWidth: 370, minWidth: 370, m: 2 }}>
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

                {project.projectTech.map((tech) => (
                  <Chip label={tech} sx={{ m: 1 }} />
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
            </CardActions>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
