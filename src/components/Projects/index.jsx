import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";

import { ProjectData } from "./projectData";
import { AnimatedDiv } from "../reusables";
import { theme } from "../../theme";

function Projects() {
  return (
    <AnimatedDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Typography variant="h1">Projects</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Object.entries(ProjectData).map(([index, project]) => (
          <Grid
            container
            direction='column'
            xs={2}
            sm={4}
            md={4}
            key={index}
            justify="center"
            alignItems="center"
          >
            <Card
              sx={{
                padding: 1,
                margin: 1,
                minWidth: 250,
                maxWidth: 400,
                minheight: 350,
                boxShadow: 5,
                background: theme.palette.secondary.dark,
              }}
            >
              <CardMedia
                className="projectImages"
                component="img"
                alt={project.title}
                height="150"
                image={project.image}
                sx={{
                  borderRadius: "0.5rem",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: theme.palette.text.light }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: theme.palette.text.light, minHeight: 60 }}
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Button
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener"
                  size="small"
                  sx={{
                    padding: "0.5rem 2rem",
                    color: theme.palette.secondary.main,
                    background: theme.palette.primary.main,
                  }}
                >
                  Github
                </Button>
                <Button
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener"
                  size="small"
                  sx={{
                    padding: "0.5rem 2rem",
                    color: theme.palette.secondary.main,
                    background: theme.palette.primary.main,
                  }}
                >
                  Deployed
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </AnimatedDiv>
  );
}

export default Projects;
