import Team from "./components/team/team.jsx";
import Services from "./components/services/services.jsx";
import Contact from "./components/contact/contact.jsx";
import Hero from "./components/hero/hero.jsx";
import Testimonials from "./components/testimonials/testimonials.jsx";
import Works from "./components/works/works";

import "./styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utilities/theme"
import Section from "./components/atoms/section/section.jsx";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Section>
        <Hero />
        <Team />
        <Services />
        <Works />
        <Testimonials />
        <Contact />
      </Section>
    </ChakraProvider>
  );
}

export default App;
