import React from "react";
import "../Styles/Skills.css";
function Skills() {
  return (
    <div class="skills-wrap">
      <h2 class="skill-title">Skills we use</h2>
      <div class="images1">
        <div>
          <img
            class="skill-img"
            src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
          ></img>
          <h5>React.js</h5>
        </div>
        <div>
          <img
            class="skill-img"
            src="https://cdn.worldvectorlogo.com/logos/vue-9.svg"
          ></img>
          <h5>Vue.js</h5>
        </div>
        <div>
          <img
            class="skill-img"
            src="https://cdn.worldvectorlogo.com/logos/nuxt-2.svg"
          ></img>
          <h5>Nuxt.js</h5>
        </div>
        <div>
          <img
            class="skill-img"
            src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
          ></img>
          <h5>Java script</h5>
        </div>
      </div>
      <div class="images2">
        <div>
          <img
            class="skill-img"
            src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
          ></img>
          <h5>Firebase</h5>
        </div>
        <div>
          <img
            class="skill-img"
            src="https://app.flutterflow.io/icons/ff-icon-192.png"
          ></img>
          <h5>Flutter Flow</h5>
        </div>
        <div>
          <img
            class="skill-img"
            src="https://www.svgrepo.com/show/452202/figma.svg"
          ></img>
          <h5>Figma</h5>
        </div>
        <div>
          <img
            class="skill-img"
            src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg"
          ></img>
          <h5>Bootstrap</h5>
        </div>
      </div>
    </div>
  );
}

export default Skills;
