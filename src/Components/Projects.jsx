import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import FadeInOnScroll from "../HOC/FadeInOnScroll";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const projectData = [
    {
      name: "HabTrack",
      img: "https://github.com/MackMartinez/Portfolio/blob/main/src/Images/HabtrackLanding.jpg?raw=true",
      github: "https://github.com/MackMartinez/HabitTracker",
      description:
        "A habit tracking application that helps you monitor your progress towards developinga nd mainting positive habits. This was a collaborative full stack project with full CRUD capabilities. ",
    },
    {
      name: "Jungle",
      img: "https://github.com/MackMartinez/Portfolio/blob/fix/project-card-size/src/Images/Jungle.JPG?raw=true",
      github: "https://github.com/MackMartinez/jungle-rails",
      description:
        "A plant shop built with Ruby and Ruby on Rails. Whether you're an experienced plant parent or a first-time plant owner, this shop has everything you need. Utilizing the Stripe API, you can purchase any of the items in the store",
    },
    {
      name: "Dine&Dash",
      img: "https://github.com/MackMartinez/Portfolio/blob/fix/project-card-size/src/Images/FoodPickUp2.JPG?raw=true",
      github: "https://github.com/nickidells97/Food-Pick-Up-App",
      description:
        "A collaborative full stack project for the busy food lover. The customer can order items and utilizing twilio API the restaurant will receive a request to confirm the order time. Based on the response, the customer will receive a text notification indicating the time until the order is ready.",
    },
  ];

  return (
    <Grid2
      container={true}
      id="Projects"
      justifyContent="space-between"
      spacing={10}
      pt={40}
      pb={30}
    >
      <Typography variant="h1" color="white">PROJECTS</Typography>
      <Grid2 container={true} width={1500} direction={"row"}>
      {projectData.map((item, index) => (
        <FadeInOnScroll componentToFade={<Card
          key={index}
          sx={{
            maxWidth: 550,
            maxHeight: 450,
            mb: 10,
            mr: 7, 
            minHeight: 600,
            borderRadius: 10,
            transform: "scale(1)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
              },
            }}
            >
            <CardMedia
              component="img"
              alt={item.img}
              height="400"
              src={item.img}
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
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                <Button size="small">
                  <GitHubIcon />
                </Button>
              </a>
            </CardActions>
          </Card>} />
        
      ))}
      </Grid2>
    </Grid2>
  );
};

export default Projects;
