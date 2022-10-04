import { Box, Typography, Button } from "@mui/material";
import { ComponentBox } from "../reusables";
import { SidebarData } from "../SideDrawer/SidebarData";

function Resume() {
  return (
    <ComponentBox>
      <h1>Resume</h1>
      {Object.entries(SidebarData).map(([key, item]) => (
      <p>{item.title}{key}</p>
      ))}
    </ComponentBox>
  );
}

export default Resume;
