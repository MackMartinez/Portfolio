import { Box, Grid, CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import DrawerAppBar from "./Components/Appbar";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Skills from "./Components/Skills";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import FadeInOnScroll from "./HOC/FadeInOnScroll";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div height={500}>
      {(loading && (
        <Box
          mt={65}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <CircularProgress size={120} />
        </Box>
      )) || (
        <BrowserRouter>
          <Box
            sx={{
              backgroundImage:
                "url(https://github.com/MackMartinez/Portfolio/blob/main/src/Images/DevBGLanding.jpg?raw=true)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <DrawerAppBar />
            <Container maxWidth="md" sx={{ marginLeft: 50 }}>
              <Landing />
            </Container>
          </Box>
            <FadeInOnScroll>
            </FadeInOnScroll>
          <Grid
            container={true}
            direction={"column"}
            justifyContent={"center"}
            pl={40}
            pr={40}
            backgroundColor="#edf2f4"
          >
            <FadeInOnScroll componentToFade={<Skills/>} />
            <FadeInOnScroll componentToFade={<Projects/>} />
            <FadeInOnScroll componentToFade={<ContactMe/>} />
          </Grid>
        </BrowserRouter>
      )}
      ;
    </div>
  );
}

export default App;
