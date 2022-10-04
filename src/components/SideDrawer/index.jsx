import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { theme } from "../../theme";
import { SidebarData } from "./SidebarData";
import { SideBarBox } from "../reusables";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const StyledLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
});

function index() {
  return (
    <SideBarBox>
      <List sx={{ padding: "1rem" }}>
        {Object.entries(SidebarData).map(([key, item]) => (
          <ListItem key={key} disablePadding>
            <ListItemButton>
              <StyledLink to={item.link}>
                {item.icon}
                <ListItemText primary={item.title} />
              </StyledLink>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            href="https://github.com/KKWChao"
            target="_blank"
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
