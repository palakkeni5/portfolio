import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const items = [
  {
    year: "Sep 2024 – Present",
    org: "The Research Foundation for SUNY",
    position: "Programmer Analyst",
    location: "Albany, New York, USA",
    work: [
      "Developed and maintained Oracle EBS and Oracle SOA applications through close collaboration with key stakeholders, streamlining system interactions and operations for 64+ NY State universities",
      "Refactored existing Oracle EBS alerts, reducing automated emails by 90% and custom code by 75% using Oracle SQL",
    ],
  },
  {
    year: "May 2023 – Aug 2023",
    org: "Juniper Networks, Inc.",
    position: "Software Engineering Intern",
    location: "Bridgewater, New Jersey, USA",
    work: [
      "Architected 3 scalable microservices for a Proof of Concept(POC) network planner by analyzing legacy monolithic codebase and containerizing services within Docker images",
      "Spearheaded implementation of GitLab CI/CD pipelines for microservices repositories with build, unit test, and deploy stages; reducing build time by 93% and automating deployments to Kubernetes cluster",
      "Authored unit tests, leveraging Jest and React Testing Library for testing modular React components developed using Slipstream UI library to achieve 90% code coverage",
    ],
  },
  {
    year: "Sep 2020 – July 2022",
    org: "Oracle Financial Software Services Ltd.",
    position: "Associate Consultant",
    location: "Mumbai, Maharashtra, India",
    work: [
      "Developed Java Spring REST APIs for a major bank(client), enabling customer profile maintenance and product management, increasing customer growth by 14% year-over-year",
      "Collaborated across cross-functional teams, utilizing Oracle JET framework to modify existing banking screens within 30 days to facilitate government compliances",
      "Integrated 20+ new processes into end of day batch to segregate the historical data strategically, expediting day-to-day banking tasks",
      "Led development of bulk file uploads by utilizing Oracle SQL to enable data processing at scale, reducing transaction time by 90%",
    ],
  },
  {
    year: "Jan 2020 – Aug 2020",
    org: "Quantiphi Analytics Solution Pvt. Ltd.",
    position: "Framework Engineer Consultant Intern: Software Developer",
    location: "Mumbai, Maharashtra, India",
    work: [
      "Reduced cost by 70% of project by migrating daily data from Google Big Query to PostgreSQL database in a Google Compute Engine instance by using Google Cloud Functions and BASH scripts",
    ],
  },
];

const Experience = () => {
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
          justifyContent="space-between"
          alignItems="center"
          marginTop={5}
        >
          <Grid item sx={{ m: 5 }}>
            <Typography variant="h3" gutterBottom>
              Experience
            </Typography>
          </Grid>
        </Grid>
        <Timeline position="alternate" sx={{ mb: 10 }}>
          {items.map((item, key) => (
            <TimelineItem key={key}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {item.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  {item.org}
                </Typography>
                <br />
                <Typography variant="body2" component="span">
                  {item.position}
                </Typography>
                <br />
                <Typography variant="subtitle1" component="span">
                  {item.location}
                </Typography>
                {/* <List>
                {item.work.map((w) => (
                  <>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={w} />
                      </ListItemButton>
                    </ListItem>
                  </>
                ))}
              </List> */}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </>
  );
};

export default Experience;
