import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box, styled } from "@mui/material";

import Layout from "./Layout/layout";
import { Home, Navbar, SideDrawer, Projects, Resume } from "./components";

const FlexBoxed = styled(Box)({
  display: "flex",
  height: "100vh",
});

function App() {
  return (
    <FlexBoxed>
      {/* Need to have sidebar and navbar switch when screen gets too small */}
      {/* <Navbar /> */}
      <SideDrawer />
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </FlexBoxed>
  );
}

export default App;
