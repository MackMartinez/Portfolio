import React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Projects = () => {

  const projectData = ["HabitTracker","Jungle","Food-Pickup"]; 

  return (
    <Grid2 container={true} justifyContent={"center"}>
      {projectData.map((item) =>(
        <div>{item}</div>
      ))}
    </Grid2>
  );
}

export default Projects;
