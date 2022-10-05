import { Box, Typography, Button } from "@mui/material";
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
          height: "70%",
        }}
      >
        <Box className="header">
          <Typography>{ResumeData[0].summary}</Typography>
        </Box>
        <Box className="skills">
          <Typography variant="h3">{ResumeData[1].title}</Typography>
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
        <Box className="projects">
          <Typography variant="h3">{ResumeData[2].title}</Typography>
        </Box>
        <Box className="experience">
          <Typography variant="h3">{ResumeData[3].title}</Typography>
        </Box>
        <Box className="education">
          <Typography variant="h3">{ResumeData[4].title}</Typography>
        </Box>
        <Button sx={{ color: theme.palette.text.dark }}>Download</Button>
      </Box>
    </ComponentBox>
  );
}

export default Resume;
