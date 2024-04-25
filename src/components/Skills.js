import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { data } from "./skillsData";

const Skills = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          marginTop={5}
        >
          <Grid item xs={1} sx={{ mt: 5, ml: 5, mr: 5 }}>
            <Typography variant="body1" gutterBottom textAlign={"center"}>
              I love to learn new things and experiment with new technologies.
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ ml: 5, mr: 5 }}>
            <Typography variant="body1" gutterBottom textAlign={"center"}>
              These are some of the major languages, technologies, tools and
              platforms I have worked with:
            </Typography>
          </Grid>
          <Divider />
          <Grid item xs={1} sx={{ mt: 2, ml: 5, mr: 5 }}>
            <Typography variant="h4" gutterBottom textAlign={"center"}>
              Languages
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ ml: 5, mr: 5 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {data.languages.map((language) => (
                <>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Avatar
                      alt={language.name}
                      src={language.logo}
                      variant="square"
                      sx={{ width: 56, height: 56 }}
                    />
                    <Typography
                      variant="button"
                      gutterBottom
                      textAlign={"center"}
                    >
                      {language.name}
                    </Typography>
                  </Grid>
                </>
              ))}
            </Stack>
          </Grid>
          <Divider />
          <Grid item xs={1} sx={{ mt: 2, ml: 5, mr: 5 }}>
            <Typography variant="h4" gutterBottom textAlign={"center"}>
              Frameworks
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ ml: 5, mr: 5 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {data.frameworks.map((framework) => (
                <>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Avatar
                      alt={framework.name}
                      src={framework.logo}
                      variant="square"
                      sx={{ width: 56, height: 56 }}
                    />
                    <Typography
                      variant="button"
                      gutterBottom
                      textAlign={"center"}
                    >
                      {framework.name}
                    </Typography>
                  </Grid>
                </>
              ))}
            </Stack>
          </Grid>
          <Divider />
          <Grid item xs={1} sx={{ mt: 2, ml: 5, mr: 5 }}>
            <Typography variant="h4" gutterBottom textAlign={"center"}>
              Web Technologies
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ ml: 5, mr: 5 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {data.webTechnologies.map((webTechnology) => (
                <>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Avatar
                      alt={webTechnology.name}
                      src={webTechnology.logo}
                      variant="square"
                      sx={{ width: 56, height: 56 }}
                    />
                    <Typography
                      variant="button"
                      gutterBottom
                      textAlign={"center"}
                    >
                      {webTechnology.name}
                    </Typography>
                  </Grid>
                </>
              ))}
            </Stack>
          </Grid>
          <Divider />
          <Grid item xs={1} sx={{ mt: 2, ml: 5, mr: 5 }}>
            <Typography variant="h4" gutterBottom textAlign={"center"}>
              Database Technologies
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ ml: 5, mr: 5 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {data.databaseTechnologies.map((databaseTechnology) => (
                <>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Avatar
                      alt={databaseTechnology.name}
                      src={databaseTechnology.logo}
                      variant="square"
                      sx={{ width: 56, height: 56 }}
                    />
                    <Typography
                      variant="button"
                      gutterBottom
                      textAlign={"center"}
                    >
                      {databaseTechnology.name}
                    </Typography>
                  </Grid>
                </>
              ))}
            </Stack>
          </Grid>
          <Divider />
          <Grid item xs={1} sx={{ mt: 2, ml: 5, mr: 5 }}>
            <Typography variant="h4" gutterBottom textAlign={"center"}>
              Tools
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ ml: 5, mr: 5, mb: 5 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {data.tools.map((tool) => (
                <>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Avatar
                      alt={tool.name}
                      src={tool.logo}
                      variant="square"
                      sx={{ width: 56, height: 56 }}
                    />
                    <Typography
                      variant="button"
                      gutterBottom
                      textAlign={"center"}
                    >
                      {tool.name}
                    </Typography>
                  </Grid>
                </>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/*
       */}
    </>
  );
};

export default Skills;
