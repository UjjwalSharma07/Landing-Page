import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

import Who from "./components/Who";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behaviour: smooth;
  overflow-y: auto;
  scrollbar_width: none;
  @media only screen and (max-width:768px){
    scroll-snap-type: y ;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;
  background: url("./img/bg.jpeg");
`;
function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    
    </Container>
  );
}

export default App;
