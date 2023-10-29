import React from "react";
import "../Styles/Effects.css";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
function Effects() {
  return (
    <div>
      <section class="top">
        <div class="content">
          <Home />
        </div>
      </section>
      <section>
        <div class="content">
          <About />
        </div>
      </section>
      <section>
        <div class="content">
          <Skills />
        </div>
      </section>
      <section>
        <div class="content">
          <Projects />
        </div>
      </section>
      <section>
        <div class="content">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default Effects;
