import { Box } from "@mui/material";
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
          <Container sx={{ justifyContent: 'space-between', marginLeft:50}}>
            <Landing />
            <Skills />
            <Projects />
            <ContactMe />
          </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
