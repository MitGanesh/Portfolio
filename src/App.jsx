import { styled } from "styled-components";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Works from "./Components/Works";
import Project from "./Components/Work2";
import TostProvider from "./Components/TostProvider";
import Overlay from "./Components/Overlay";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./images/bg.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <TostProvider />
      <Overlay />
      <Hero />
      <About />
      <Works />
      <Project />
      <Contact />
    </Container>
  )
}

export default App
