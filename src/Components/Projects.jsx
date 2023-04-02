import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import HabtrackLanding from '../Images/HabtrackLanding.JPG'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Projects = () => {
  const projectData = [
    {
      name: "HabTrack",
      img: `${HabtrackLanding}`,
      description:
        "A habit tracking application that helps you monitor your progress towards developinga nd mainting positive habits. This was a collaborative full stack project with full CRUD capabilities. ",
    },
    { name: "Scheduler",
      img: "test",
      description: "React based project to create meetings for students to connect with mentors in real-time."},
    { name: "Food-Pickup",
    img: "test",
    description: "Collaborative full stack project to simulate a restaurant ordering system for a customer to preorder and pickup their food. "},
  ];

  return (
    <Grid2 container={true} justifyContent={"center"} id="Projects" pt={50}>
      {projectData.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={require(`${HabtrackLanding}`)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      ))}
    </Grid2>
  );
};

export default Projects;
