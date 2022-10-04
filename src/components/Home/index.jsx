import { Box, Typography, Skeleton } from "@mui/material";

import { ComponentBox } from "../reusables";

function Home() {
  return (
    <ComponentBox sx={{ justifyContent: "" }}>
      <Box align='left'>
        {/* add loading later */}
        <img
          src="./assets/Profile.jpg"
          alt="profile"
          style={{
            borderRadius: "20%",
            width: "15rem",
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
    </ComponentBox>
  );
}

export default Home;
