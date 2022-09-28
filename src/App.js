import './App.css'
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Navbar,
  SideDrawer,
  Projects,
  Resume,
} from "./components";
import Layout from './Layout/layout';

import { ThemeProvider, createTheme, Box, styled } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3C4F76",
    },
    secondary: {
      main: "#D1BEB0",
    },
  },
});

const FlexBoxed = styled(Box)({
  display: "flex",
  FormatAlignJustify: "space-between",
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <FlexBoxed>
        <SideDrawer />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resumes" element={<Resume />} />
          </Routes>
        </Layout>
      </FlexBoxed>
    </ThemeProvider>
  );
}

export default App;
