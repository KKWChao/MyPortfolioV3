import React from "react";

import { theme } from "../../theme";
import { SidebarData } from "./SidebarData";
import { SideBarBox, StyledLink } from "../reusables";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

function index() {
  return (
    <SideBarBox>
      <List sx={{ padding: "1rem" }}>
        {Object.entries(SidebarData).map(([key, item]) => (
          <ListItem key={key} disablePadding>
            <StyledLink to={item.link}>
              <ListItemButton sx={{ display: "flex", gap: "1rem" }}>
                {item.icon}
                <ListItemText primary={item.title} />
              </ListItemButton>
            </StyledLink>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            href="https://github.com/KKWChao"
            target="_blank"
            rel="noopener"
            sx={{ color: theme.palette.primary.main }}
          >
            <Box display="flex" gap="1rem">
              <GitHub />
              <ListItemText primary="Github" />
            </Box>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            href="https://www.linkedin.com/in/kelvinkchao/"
            target="_blank"
            rel="noopener"
            sx={{ color: theme.palette.primary.main }}
          >
            <Box display="flex" gap="1rem">
              <LinkedIn />
              <ListItemText primary="LinkedIn" />
            </Box>
          </ListItemButton>
        </ListItem>
      </List>
    </SideBarBox>
  );
}

export default index;
