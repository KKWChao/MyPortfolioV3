import "./App.css";

import { Box, styled } from "@mui/material";

import Layout from "./Layout/layout";
import AnimatedRoutes from "./components/AnimatedRoutes";
import {  SideDrawer } from "./components";

const FlexBoxed = styled(Box)({
  display: "flex",
  minWidth: '100%'
});

function App() {
  return (
    <FlexBoxed>
      {/* Need to have sidebar and navbar switch when screen gets too small */}
      {/* <Navbar /> */}
      <SideDrawer />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </FlexBoxed>
  );
}

export default App;
