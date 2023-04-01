import { Box } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import DrawerAppBar from "./Components/Appbar";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Skills from "./Components/Skills";

function App() {
  return (
    <Box>
      <DrawerAppBar />
        <Container sx={{ justifyContent: 'space-between', marginLeft:50}}>
          <Landing />
          <Projects />
          {/* <Skills /> */}
          <ContactMe />
        </Container>
    </Box>
  );
}

export default App;
