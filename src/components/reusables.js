import { theme } from "../theme";
import { Box, styled } from "@mui/material"

export const ComponentBox = styled(Box) ({
  padding: '0 5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  wrap: 'wrap',
  height: '100%',
  zIndex: 0,
  color: theme.palette.text.main
})

export const SideBarBox = styled(Box) ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: 'sticky',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  boxShadow: 6,
  zIndex: 10
})