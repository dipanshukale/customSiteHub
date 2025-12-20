import { Routes, Route } from "react-router-dom";

import Hero from "./Pages/hero";
import TrustStrip from "./Pages/TrustStrip";
import Services from "./Pages/services";
import SelectedWork from "./Pages/SelectedWork";
import CaseStudy from "./Pages/CaseStudy";

import Section from "./Components/Section";
import Showcase from "./Components/ShowCase";
import MagneticCursor from "./Components/MagneticCursor";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import ViewWork from "./Pages/ViewWork";

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <SelectedWork />
      <Section>
        <Showcase />
      </Section>
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <MagneticCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<ViewWork/>} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
      </Routes>
    </>
  );
}

export default App;
