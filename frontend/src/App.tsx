import { Routes, Route, useLocation } from "react-router-dom";

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
import AboutUs from "./Pages/AboutUs";
import ServicesPage from "./Pages/ServicesPage";
import Footer from "./Components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutUs />
      <Services />
      <SelectedWork />
      <TestimonialsSlider />
      <AfterTestimonials />
    </>
  );
}

function App() {
  const location = useLocation();

  // Pages where footer SHOULD appear
  const showFooter = [
    "/",
    "/about",
    "/service",
    "/contact",
    "/startproject",
  ].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<ViewWork />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/startproject" element={<StartProject />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
      </Routes>

      {/* ✅ Footer controlled here */}
      {showFooter && <Footer />}
    </>
  );
}

export default App;
