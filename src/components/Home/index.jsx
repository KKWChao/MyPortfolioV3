import { Box, Typography } from "@mui/material";
import { ComponentBox, AnimatedDiv } from "../reusables";

function Home() {
  return (
    <AnimatedDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{ justifyContent: "" }}
    >
      <Box align="left">
        {/* add loading later */}
        <img
          src="./assets/Profile.jpg"
          alt="profile"
          style={{
            borderRadius: "20%",
            width: "15rem",
            boxShadow: "0 .5rem 1.2rem rgba(0,0,0,.2)",
          }}
        />
      </Box>

      <Box align="right">
        <Typography variant="h1">Hi, My name is Kelvin</Typography>
        <Typography variant="h6" sx={{ width: "80%" }}>
          I am Junior full stack web developer with a background in statistics,
          information technology and economics.
        </Typography>
      </Box>

      {/* <Button sx={{ margin: '2rem 0', color: 'black', backgroundColor: 'gray', width: '5rem'}}>Test</Button> */}
    </AnimatedDiv>
  );
}

export default Home;
