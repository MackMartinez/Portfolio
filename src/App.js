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
      <Box>
        <DrawerAppBar />
          <Container maxWidth="md" sx={{marginLeft:50}}>
            <Landing />
          </Container>
          <Grid container={true} direction={"column"} justifyContent={"center"} pl={40} pr={40}>

            <Skills />
            <Projects />
            <ContactMe />
          </Grid>
          {/* <Container sx={{ justifyContent: 'space-between', backgroundColor: "red"}}> */}
          {/* </Container> */}
      </Box>
    </BrowserRouter>
  );
}

export default App;
