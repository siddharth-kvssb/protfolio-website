import React from "react";
import img from "../Assets/factocart.png";
import "../Styles/Projects.css";
function Projects() {
  return (
    <div class="project-wrap">
      <h2>PROJECTS</h2>
      <div id="Events" className="past-events-container">
        <main class="page-content">
          <div className="card">
            <div class="content-event">
              <h2 class="title sep-title">NMIT Hacks</h2>
              <p className="copy">Hackathon conducted in 2023 by NMIT CSE</p>
              <a href="https://nmithacks.com/" target="_blank">
                <button class="btn btn-outline-dark">Visit website</button>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="content-event">
              <h2 class="title">The Plant App</h2>
              <p class="copy">
                A Full-Stack e-commerce Android application built using
                Flutter and Firebase.
              </p>
              <a href="https://the-plant-app.flutterflow.app/" target="_blank">
                <button class="btn btn-outline-dark">Visit website</button>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="content-event">
              <h2 class="title">Factocart</h2>
              <p class="copy">
                {" "}
                A Full-Stack e-commerce Android application built using
                Flutter and Firebase.
              </p>
              <a href="https://factocart.flutterflow.app" target="_blank">
                <button class="btn btn-outline-dark">Visit website</button>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Projects;
