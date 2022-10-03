import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import styled from "@emotion/styled";
import { theme } from "../../theme";

import { SidebarData } from "./SidebarData";

const SideBarBox = styled(Box)({
  background: theme.palette.secondary.main,
  padding: 10,
});

const StyledLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
  display: "flex",
  gap: "1rem",
});

function index() {
  return (
    <SideBarBox>
      <List>
        {Object.entries(SidebarData).map(([text, item], i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton>
              <StyledLink to={item.link}>
                {item.icon}
                <ListItemText primary={item.title} />
              </StyledLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SideBarBox>
  );
}

export default index;
