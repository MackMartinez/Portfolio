import React from 'react'
import { Container, Typography, Box } from '@mui/material'

export default function Skills() {

  const frontEndData = ["HTML5", "CSS3", "Javascript", "React", "Material UI", "SASS", "Bootstrap", "jQuery"]
  const backEndData = ["NodeJS", "Express", "PostgreSQL", "Ruby", "Ruby on Rails"]
  const testingData = ["Storybook", "Mocha & Chai", "Jest"]
  const toolsData = ["VS Code", "Git"]

  return (
    <Container>
      <Box>
        <Typography>
          Front End
        </Typography>
        <Typography>
          Back End
        </Typography>
        <Typography>
          Testing
        </Typography>
        <Typography>
          Libraries & Frameworks
        </Typography>
        <Typography>
          Tools
        </Typography>
      </Box>

    </Container>
  )
};
