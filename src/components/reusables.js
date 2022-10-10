import { theme } from "../theme";
import { Box, styled } from "@mui/material"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

export const ComponentBox = styled(Box) ({
  padding: '0 5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  wrap: 'wrap',
  height: '100%',
  color: theme.palette.text.main
})

export const AnimatedDiv = styled(motion.div) ({
  padding: '0 5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  wrap: 'wrap',
  height: '100%',
  color: theme.palette.text.main,
})

export const SideBarBox = styled(Box) ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: 'sticky',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  boxShadow: 10
})

export const StyledLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
  width: '100%'
});