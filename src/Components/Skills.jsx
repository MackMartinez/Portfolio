import React from "react";
import { Typography, ListItem } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Skills() {
  const frontEndData = [
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "Material UI",
    "SASS",
    "Bootstrap",
    "jQuery",
  ];
  const backEndData = [
    "NodeJS",
    "Express",
    "PostgreSQL",
    "Ruby",
    "Ruby on Rails",
  ];
  const testingData = ["Storybook", "Mocha & Chai", "Jest"];
  const toolsData = ["VS Code", "Git"];

  return (
    <Grid2
      container={true}
      direction={"row"}
      justifyContent={"space-between"}
      marginTop={100}
      marginBottom={100}
      id="Skills"
    >
      <Grid2 container={true} direction={"column"} justifyContent={"center"}>
        <Typography variant="h4">Front End</Typography>
        {frontEndData.map((item, index) => (
          <div key={index}>
            <ListItem>
              <Typography>{item}</Typography>
            </ListItem>
          </div>
        ))}
      </Grid2>
      <Grid2 container={true} direction={"column"}>
        <Typography variant="h4">Back End</Typography>
        {backEndData.map((item, index) => (
          <div key={index}>
            <ListItem>
              <Typography>{item}</Typography>
            </ListItem>
          </div>
        ))}
      </Grid2>
      <Grid2 container={true} direction={"column"}>
        <Typography variant="h4">Testing</Typography>
        {testingData.map((item, index) => (
          <div key={index}>
            <ListItem>
              <Typography>{item}</Typography>
            </ListItem>
          </div>
        ))}
      </Grid2>
      <Grid2 container={true} direction={"column"}>
        <Typography variant="h4">Tools</Typography>
        {toolsData.map((item, index) => (
          <div key={index}>
            <ListItem>
              <Typography>{item}</Typography>
            </ListItem>
          </div>
        ))}
      </Grid2>
    </Grid2>
  );
}
