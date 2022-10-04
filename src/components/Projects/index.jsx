import {
  Box,
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

function Projects() {
  return (
    <ComponentBox>
      <Typography variant="h1">Projects</Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Object.entries(ProjectData).map(([index, item]) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Github</Button>
              <Button size="small">Deployed</Button>
            </CardActions>
          </Card>
          </Grid>
        ))}
      </Grid>
    </ComponentBox>
  );
}

export default Projects;
