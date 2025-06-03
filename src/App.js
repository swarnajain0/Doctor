import React from "react";
import NavBar              from "./components/NavBar";
import Hero                from "./components/Hero";
import WhyChooseUs            from "./components/WhyChooseUs";
import DoctorSection       from "./components/DoctorSection";
import Testimonials        from "./components/Testimonials";
import ConditionsCarousel  from "./components/ConditionsCarousel";
import SpecialisedServices from "./components/SpecialisedServices";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <WhyChooseUs />
      <DoctorSection />
      <Testimonials />
      <ConditionsCarousel />
      <SpecialisedServices />
      <FAQ />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
