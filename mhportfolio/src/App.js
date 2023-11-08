import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import ExternalLinks from "./Components/ExternalLinks";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="flex flex-col scroll-smooth snap-mandatory snap-y">
      <NavBar />
      <div className="snap-center">
        <Hero />
        <ExternalLinks />
      </div>

      <div className="snap-center">
        <About />
      </div>
      <Testimonial />
    </div>
  );
}

export default App;
