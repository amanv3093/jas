import React from "react";
import Header from "./header";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import TestimonialSection from "./testimonial";
import ContactUs from "./contact_us";

function Home() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <TestimonialSection />
      <ContactUs />
    </div>
  );
}

export default Home;
