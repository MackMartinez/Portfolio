import { Box } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import DrawerAppBar from "./Components/Appbar";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Skills from "./Components/Skills";
import { BrowserRouter } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


function App() {
  return (
    <BrowserRouter>
      <Box>
        <DrawerAppBar />
          <Container maxWidth="md" sx={{ justifyContent: 'space-between', marginLeft:50}}>
            <Landing />
          </Container>
          <Container maxWidth="1" sx={{ justifyContent: 'space-between'}}>
            <Skills />
            <Projects />
            <ContactMe />
          </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
