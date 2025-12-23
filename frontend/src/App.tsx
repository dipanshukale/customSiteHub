import { Routes, Route } from "react-router-dom";

import Hero from "./Pages/hero";
import TrustStrip from "./Pages/TrustStrip";
import Services from "./Pages/services";
import SelectedWork from "./Pages/SelectedWork";
import CaseStudy from "./Pages/CaseStudy";

import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import ViewWork from "./Pages/ViewWork";
import ContactPage from "./Pages/contact";
import TestimonialsSlider from "./Pages/Testimonial";
import StartProject from "./Pages/StartProject";
import AfterTestimonials from "./Pages/AfterTestimonials";

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <SelectedWork />
      <TestimonialsSlider/>
      <AfterTestimonials/>
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<ViewWork/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/startproject" element={<StartProject/>} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
      </Routes>
    </>
  );
}

export default App;
