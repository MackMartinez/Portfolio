import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import '@fontsource/roboto/400.css';

const Landing = () => {
  return (
    <Grid2 container={true} justifyContent={"center"} flexDirection="column" id="Home" sx={{
      pt: 65,
      pb: 60
    }}>
        <Typography variant="h1" sx={{color:"#A1E2FF"}}>Macky Martinez</Typography>
        <Typography variant="h3" sx={{color:"#A1E2FF"}}>Full-Stack Web Developer</Typography>
        <Box sx={{ pt: 4 }}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" sx={{backgroundColor:"#A1E2FF"}}>About Me</Button>
            <Button variant="contained" href="#outlined-buttons" sx={{backgroundColor:"#A1E2FF"}}>
              Contact Me
            </Button>
          </Stack>
      </Box>
    </Grid2>
  );
};

export default Landing;
