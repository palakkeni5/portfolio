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
    year: "May 2023 – Aug 2023",
    org: "Juniper Networks, Inc.",
    position: "Software Engineering Intern",
    location: "Bridgewater, New Jersey, USA",
    work: [
      "Created Proof of Concept for web planner application utilizing pluggable, custom-built microservice Docker containers with Node JS and PostgreSQL, resulting in a 90% reduction in deployment time.",
      "Implemented CI/CD pipelines, automating docker image builds, resulting in 93% time reduction required by GitLab pipelines.",
      "Developed react components and authored comprehensive unit tests for 90% coverage, boosting code stability.",
    ],
  },
  {
    year: "Sep 2020 – July 2022",
    org: "Oracle Financial Software Services Ltd.",
    position: "Associate Consultant",
    location: "Mumbai, Maharashtra, India",
    work: [
      "Created new Java Spring-based REST APIs for customer profile and product management for mobile and internet banking applications, increasing customer growth by 14% in FY 2021-22.",
      "Developed new bulk file uploads in the loans department to automate manual processing of records, reducing the time of transactions by 90%.",
      "Integrated new processes into the end of day batch using Oracle SQL packages and functions to purge and segregate the historical data, expediting day-to-day banking tasks.",
      "Automated banking reports and data extracts for locker products for ad-hoc and periodic reporting, gaining new insights into resource utilization within the bank.",
    ],
  },
  {
    year: "Jan 2020 – Aug 2020",
    org: "Quantiphi Analytics Solution Pvt. Ltd.",
    position: "Framework Engineer Consultant Intern: Software Developer",
    location: "Mumbai, Maharashtra, India",
    work: [
      "Reduced cost of an existing project by 70% and improved its overall performance by successfully migrating data from Google Big Query to Google Compute Engine instance of PostgreSQL database.",
      "Developed REST API in Java Spring and a front-end application in React JS for a car insurance application to  check the user's insurance eligibility.",
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
