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

import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DescriptionIcon from "@mui/icons-material/Description";

const SideBarBox = styled(Box)({
  background: theme.palette.secondary.main,
  padding: 10,
});

const StyledLink = styled(Link)({
  color: 'inherit', 
  textDecoration: 'none',
  display: 'flex',
  gap: '1rem'
})


// iterate over obects for navigation instead of lists
// this way i can remove link to '/home' and just have '/'
const linkItems = [
  {
    target: "Home",
    link: "/",
    icon: HouseSidingIcon,
  },
  {
    target: "Projects",
    link: "/projects",
    icon: AccountTreeIcon,
  },
  {
    target: "Resume",
    link: "/link",
    icon: DescriptionIcon,
  },
];

function index() {
  return (
    <SideBarBox>
      <List>
        {["Home", "Projects", "Resume"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <StyledLink to={text}>
                {/* Conditional Statement to change the image, should replace with object mapping */}
                {index === 0 ? (
                  <HouseSidingIcon />
                ) : index === 1 ? (
                  <AccountTreeIcon />
                ) : index === 2 ? (
                  <DescriptionIcon />
                ) : null}
                <ListItemText primary={text} />
              </StyledLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SideBarBox>
  );
}

export default index;
