import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom'


import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styled from "@emotion/styled";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { LogoDev } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  FormatAlignJustify: "space-between",
});

const Navbar = () => {
  const [value, setValue] = useState();

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <LogoDev></LogoDev>
        <Tabs
          textColor="inherit"
          value={value}
          onChange={(e, value) => setValue(value)}
          indicatorColor="secondary"
        >
          <Tab label="test1" />
          <Tab label="test1" />
          <Tab label="test1" />
          <Tab label="test1" />
        </Tabs>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
