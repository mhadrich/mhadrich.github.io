import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import ExternalLinks from "./Components/ExternalLinks";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import MainView from "./Components/Projects/MainView";

function App() {
  return (
    <div className="flex flex-col dark:bg-black">
      <NavBar />
        <Hero />
        <ExternalLinks />
        <MainView />
        <About />
      <Testimonial />
    </div>
  );
}

export default App;
