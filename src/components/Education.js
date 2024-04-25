import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

const items = [
  {
    year: "Sep 2022 - May 2024",
    degree: "Masters of Science",
    major: " Computer Engineering",
    university: "New York University, \n New York, USA",
    gpa: "GPA : 3.74 / 4.00",
  },
  {
    year: "Aug 2016 - May 2020",
    degree: "Bachelor of Engineering",
    major: "Information Technology",
    university: "University of Mumbai, Mumbai, India",
    gpa: "GPA :  8.60 / 10.0",
  },
];

const Education = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        marginTop={5}
      >
        <Grid item sx={{ m: 5 }}>
          <Typography variant="h3" gutterBottom>
            Education
          </Typography>
        </Grid>
      </Grid>
      <Timeline position="alternate">
        {items.map((item) => (
          <TimelineItem>
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
                {item.degree}
              </Typography>
              <br />
              <Typography variant="body2" component="span">
                {item.major}
              </Typography>
              <br />
              <Typography variant="subtitle1" component="span">
                {item.university}
              </Typography>
              <Typography>{item.gpa}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default Education;
