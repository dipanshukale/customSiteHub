import Hero from "./Pages/hero";
import Section from "./Components/Section";
import Showcase from "./Components/ShowCase";
import MagneticCursor from "./Components/MagneticCursor";
import Navbar from "./Components/Navbar";
import TrustStrip from "./Pages/TrustStrip";
import Services from "./Pages/services";

function App() {

  return (
    <>
      <MagneticCursor />
      <Navbar/>
      <Hero />
      <TrustStrip/>
      <Services/>
      <Section>
      <Showcase />
      </Section>
    </>
  );
}

export default App;
