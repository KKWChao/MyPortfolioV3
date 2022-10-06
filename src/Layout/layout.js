import React from 'react'
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme } from "../theme";

const CustomBox = styled(Box) ({
  width: '100%',
  minHeight: '100vh',
  background: theme.palette.primary.main,
})


function layout({children}) {

  return (
    <CustomBox>
      {children}
    </CustomBox>
  )
}

export default layout