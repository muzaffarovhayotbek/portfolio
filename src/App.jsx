import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Projects";
import MainLayouts from "./layout/MainLayout";

function App() {
  return (
    <div>
      <MainLayouts>
        <section id="home" className="scroll-mt-20">
          <Home />
        </section>
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
        <section id="projects" className="scroll-mt-20">
  <Project />
</section>
      </MainLayouts>
    </div>
  );
}

export default App;
