import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import DrawerAppBar from "./Components/Appbar";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Skills from "./Components/Skills";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Box sx={{backgroundImage: "url(https://github.com/MackMartinez/Portfolio/blob/main/src/Images/DeveloperBGLanding.jpg?raw=true)",
      backgroundSize: "cover",backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'}}>
        <DrawerAppBar />
          <Container maxWidth="md" sx={{marginLeft:50, }}>
            <Landing />
          </Container>
      </Box>
          <Grid container={true} direction={"column"} justifyContent={"center"} pl={40} pr={40}>
            <Skills />
            <Projects />
            <ContactMe />
          </Grid>
    </BrowserRouter>
  );
}

export default App;
