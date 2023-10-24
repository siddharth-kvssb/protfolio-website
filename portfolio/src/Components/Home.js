import React, { useState, useEffect, useRef } from "react";
import "../Styles/Home.css";
import BIRDS from "vanta/dist/vanta.birds.min";
import GLOBE from "vanta/dist/vanta.globe.min";
import NET from "vanta/dist/vanta.net.min";
import RINGS from "vanta/dist/vanta.rings.min";

import * as THREE from "three";

export const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 700.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef}>
      <p class="home-text">
        {" "}
        GROW YOUR <br></br>COMPANY WITH US
      </p>
    </div>
  );
};
export default Home;
//style={{ color: "#fff", paddingTop: "20px" }}
