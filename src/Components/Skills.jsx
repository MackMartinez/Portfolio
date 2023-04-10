import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SkillsCard from "./SkillsCard";
import { Typography } from "@mui/material";
import FadeInOnScroll from "../HOC/FadeInOnScroll";

export default function Skills() {
  const frontEndData = {
    title: "Front End",
    languages: [
      "HTML5",
      "CSS3",
      "Javascript",
      "React",
      "Material UI",
      "SASS",
      "Bootstrap",
      "jQuery",
    ],
  };
  const backEndData = {
    title: "Back End",
    languages: ["NodeJS", "Express", "PostgreSQL", "Ruby", "Ruby on Rails"],
  };
  const testingData = {
    title: "Testing",
    languages: ["Storybook", "Mocha & Chai", "Jest"],
  };
  const toolsData = {
    title: "Tools",
    languages: ["VS Code", "Git"],
  };

  return (
    <Grid2
      container={true}
      direction={"row"}
      justifyContent={"space-between"}
      pt={20}
      id="Skills"
    >
      <Typography variant="h1" color="#264653">
        Skills
      </Typography>
      <Grid2 container={true} width={1500} direction={"row"}>
        <FadeInOnScroll
          componentToFade={
            <SkillsCard
              data={frontEndData.languages}
              title={frontEndData.title}
            />
          }
        />
        <FadeInOnScroll
          componentToFade={
            <SkillsCard
              data={backEndData.languages}
              title={backEndData.title}
            />
          }
        />
        <FadeInOnScroll
          componentToFade={
            <SkillsCard
              data={testingData.languages}
              title={testingData.title}
            />
          }
        />
        <FadeInOnScroll
          componentToFade={
            <SkillsCard data={toolsData.languages} title={toolsData.title} />
          }
        />
      </Grid2>
    </Grid2>
  );
}
