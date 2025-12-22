import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./Pages/hero";
import Section from "./Components/Section";
import Showcase from "./Components/ShowCase";
import MagneticCursor from "./Components/MagneticCursor";
import Navbar from "./Components/Navbar";
import TrustStrip from "./Pages/TrustStrip";
import Services from "./Pages/services";
import Contact from "./Pages/contact"; 
import Footer from "./Components/Footer";
import TestimonialsSlider from "./Components/Testimonial";
import About from "./Pages/about";

function App() {
  return (
    <Router>
      <MagneticCursor />
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TrustStrip />
              <Services />
              <Section>
                <Showcase />
              </Section>
            </>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="/about" element={<About />} />

        

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
