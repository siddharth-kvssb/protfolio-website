import React, { Component } from "react";
import "../Styles/Projects.css";
import img from "../Assets/projects.svg";
export class Projects extends Component {
  render() {
    return (
      <div id="Events" className="past-events-container">
        <div className="title-event">PROJECTS</div>
        <div class="project-img">
          <dotlottie-player
            src="https://lottie.host/f194beee-8faa-410c-ba8b-a381229689d9/6eKb6ZaZwI.json"
            background="transparent"
            speed="1.5"
            style={{ width: "80vh", height: "80vh" }}
            direction="1"
            mode="normal"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <main class="page-content">
          <div className="card">
            <div class="content-event">
              <h2 class="title sep-title">Factocart</h2>
              <p className="copy">
                An e-commerce website to buy and sell goods
              </p>
              <a href="https://factocart.flutterflow.app/" target="_blank">
                <button class="btn btn-outline-dark">View website</button>
              </a>
            </div>
          </div>
          {/* <div class="card">
            <div class="content-event">
              <h2 class="title">comming soon ....</h2>
              <p class="copy">Project work in progress</p>
              <a href="" target="_blank">
                <button class="btn btn-outline-dark">View Website</button>
              </a>
            </div>
          </div> */}
          {/* <div class="card"> 
            <div class="content-event">
              <h2 class="title">Sports Events</h2>
              <p class="copy">Check out all Sports events taking place</p>
              <button class="btn">View Events</button>
            </div>
    </div>*/}
        </main>
      </div>
    );
  }
}

export default Projects;
