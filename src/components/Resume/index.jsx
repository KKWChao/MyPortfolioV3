import { Box, Typography, Button } from "@mui/material";

import { SidebarData } from "../SideDrawer/SidebarData";

function Resume() {
  return (
    <Box p={1} m={2}>
      <h1>Resume</h1>
      {Object.entries(SidebarData).map(([key, item], i) => (
      <p>{item.title}</p>

      ))}
    </Box>
  );
}

export default Resume;
