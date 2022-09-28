import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Navbar, Projects, Resume } from "./components";
import { Box, Stack } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Stack>
          <Navbar />
          <Home />
        </Stack>
      </Box>
    </ThemeProvider>

    /* 
      <Router>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Router>
    */
  );
}

export default App;
