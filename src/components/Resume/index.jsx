import { Box, Typography, Button, Grid } from "@mui/material";
import { ComponentBox } from "../reusables";
import { theme } from "../../theme";

import { ResumeData } from "./resumeData";

function Resume() {
  return (
    <ComponentBox>
      <Typography variant="h1">Resume</Typography>
      <Box
        sx={{
          backgroundColor: "white",
          minheight: "70%",
        }}
      >
        <Box className="header">
          <Typography>{ResumeData[0].summary}</Typography>
        </Box>
        <Box className="skills">
          <Typography variant="h4">{ResumeData[1].title}</Typography>
          <Typography>
            Front End: <strong>{ResumeData[1].frontEnd}</strong>
            <br />
            Back End: <strong>{ResumeData[1].backEnd}</strong>
            <br />
            Concepts: <strong>{ResumeData[1].concepts}</strong>
            <br />
            Tools: <strong>{ResumeData[1].tools}</strong>
            <br />
          </Typography>
        </Box>
        {/* Not needed since the project page exists */}
        {/* <Box className="projects">
          <Typography variant="h4">{ResumeData[2].title}</Typography>
          <Typography variant="h6">
            <Grid>
              {Object.entries(ResumeData[2]).map(([key, item]) => (
                <Box key={key}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography>{item.description}</Typography>
                  <Typography>{item.role}</Typography>
                  <Typography>{item.technology}</Typography>
                  <Button href={item.github} target="_blank">
                    Github
                  </Button>
                  <Button href={item.deploy} target="_blank">
                    Deployment
                  </Button>
                </Box>
              ))}
            </Grid>
          </Typography>
        </Box> */}
        <Box className="experience">
          <Typography variant="h4">{ResumeData[3].title}</Typography>
          <Typography variant="h6">
            {ResumeData[3].current.role} : {ResumeData[3].current.company},{" "}
            {ResumeData[3].current.location}
          </Typography>
          <Typography>{ResumeData[3].current.time}</Typography>
          <Typography>
            {ResumeData[3].current.bullet1}
            <br />
            {ResumeData[3].current.bullet2}
            <br />
            {ResumeData[3].current.bullet3}
            <br />
            {ResumeData[3].current.bullet4}
            <br />
          </Typography>
        </Box>
        <Box className="education">
          <Typography variant="h4">{ResumeData[4].title}</Typography>
          <Box>
            {Object.entries(ResumeData[4]).map(([key, item]) => (
              <Box key={key}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="h7">
                  {item.location} {item.completed}
                </Typography>
                <Typography>{item.cert}</Typography>
                <Typography>{item.cert1}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Button sx={{ color: theme.palette.text.dark }}>Download</Button>
    </ComponentBox>
  );
}

export default Resume;
