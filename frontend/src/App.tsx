import Hero from "./Pages/hero";
import Section from "./Components/Section";
import Showcase from "./Components/ShowCase";
import MagneticCursor from "./Components/MagneticCursor";
import Navbar from "./Components/Navbar";

function App() {

  return (
    <>
      <MagneticCursor />
      <Navbar/>
      <Hero />
      <Section>
      <Showcase />
      </Section>
    </>
  );
}

export default App;
