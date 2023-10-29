import React, { useState, useEffect, useRef } from "react";
import "../Styles/Home.css";
import BIRDS from "vanta/dist/vanta.birds.min";
import GLOBE from "vanta/dist/vanta.globe.min";
import NET from "vanta/dist/vanta.net.min";
import RINGS from "vanta/dist/vanta.rings.min";

import * as THREE from "three";

export const Home = () => {
  return (
    <div class="home-wrap">
      <div class="home-flex">
        <div class="home-img">
          <dotlottie-player
            src="https://lottie.host/f194beee-8faa-410c-ba8b-a381229689d9/6eKb6ZaZwI.json"
            background="transparent"
            speed="1.5"
            style={{ width: "100vh", height: "100vh" }}
            direction="1"
            mode="normal"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div class="animated-title">
          <div class="text-top">
            <div>
              <span>Transforming Ideas</span>
              <span>into</span>
            </div>
          </div>
          <div class="text-bottom">
            <div>Seamless Digital Experiences</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
//style={{ color: "#fff", paddingTop: "20px" }}
