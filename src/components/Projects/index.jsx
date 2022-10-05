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
import { ComponentBox } from "../reusables";
import { theme } from "../../theme";

function Projects() {
  return (
    <ComponentBox>
      <Typography variant="h1">Projects</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Object.entries(ProjectData).map(([index, project]) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card
              sx={{
                minWidth: 200,
                maxWidth: 500,
                padding: '1rem',
                boxShadow: 5,
                background: theme.palette.secondary.dark,
              }}
            >
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image="#"
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
                  sx={{ color: theme.palette.text.light }}
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Button
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
    </ComponentBox>
  );
}

export default Projects;
