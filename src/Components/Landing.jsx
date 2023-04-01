import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Landing = () => {
  return (
    <Box sx={{
      pt:40,
      pb:80
    }}>
      <Typography variant="h1">Macky Martinez</Typography>
      <Typography variant="h3">Full-Stack Software Developer</Typography>
      <Box sx={{pt: 4}}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined">About Me</Button>
        <Button variant="outlined" href="#outlined-buttons">
          Contact Me
        </Button>
      </Stack>
      </Box>
    </Box>
  );
};

export default Landing;
