import { Box, Typography, Button } from "@mui/material";

import { SidebarData } from "../SideDrawer/SidebarData";
import { ComponentBox } from "../reusables";

function Projects() {
  return (
    <ComponentBox>
      <Typography variant="h1">Projects</Typography>
      <Box>
        <h1>Resume</h1>
        {Object.entries(SidebarData).map(([key, item]) => (
          <p key={key}>
            {item.title}
            {key}
          </p>
        ))}
      </Box>
    </ComponentBox>
  );
}

export default Projects;
