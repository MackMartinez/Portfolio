import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import "@fontsource/roboto/400.css";
import TypeWriterEffect from "react-typewriter-effect";

const Landing = () => {
  return (
    <Grid2
      container={true}
      justifyContent={"center"}
      flexDirection="column"
      id="Home"
      sx={{
        pt: 65,
        pb: 60,
      }}
    >
      <Typography variant="h1" sx={{ color: "#2a9d8f" }}>
        Macky Martinez
      </Typography>
      <TypeWriterEffect
        textStyle={{ fontFamily: "Lobster", color: "white" }}
        startDelay={200}
        cursorColor="#2a9d8f"
        multiText={[
          ' Full Stack Web Developer']}
        typeSpeed={130}
        eraseSpeed={120}
        multiTextLoop="true"
      />

      <Box sx={{ pt: 4 }}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" sx={{ backgroundColor: "#2a9d8f" }}>
            About Me
          </Button>
          <Button
            variant="contained"
            href="#outlined-buttons"
            sx={{ backgroundColor: "#2a9d8f" }}
          >
            Contact Me
          </Button>
        </Stack>
      </Box>
    </Grid2>
  );
};

export default Landing;
