import React from "react";
import NavBar              from "./components/NavBar";
import Hero                from "./components/Hero";
import Features            from "./components/Features";
import DoctorSection       from "./components/DoctorSection";
import Testimonials     from "./components/Testimonials";
import ConditionsCarousel  from "./components/ConditionsCarousel";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <DoctorSection />
      <Testimonials />
      <ConditionsCarousel />
      <ContactSection />
      {/* …other sections */}
    </>
  );
}

export default App;
