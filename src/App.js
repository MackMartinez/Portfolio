import { Box } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import DrawerAppBar from "./Components/Appbar";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <Box>
      <DrawerAppBar />
        <Container sx={{ justifyContent: 'space-between', marginLeft:50}}>
          <Landing />
          <Projects />
          <ContactMe />
        </Container>
    </Box>
  );
}

export default App;
