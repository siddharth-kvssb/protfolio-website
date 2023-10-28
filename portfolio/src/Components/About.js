import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div class="about">
      <div className="about-container">
        <div id="About" className="container">
          <h2 className="about-heding">ABOUT US</h2>

          <div class="about-flex">
            <div>
              {" "}
              <p className="about-content">
                Our startup company specializes in developing web and mobile
                applications, offering a unique blend of freelancing services
                that cater to a wide range of client needs. <br></br>
                <br></br>At the heart of our operation lies a commitment to
                problem-solving, where our dedicated team excels at tackling
                complex challenges with innovative solutions. <br></br>
                <br></br>
                We pride ourselves not only on the quality of our work but also
                on the nurturing of a positive work culture that encourages
                collaboration, creativity, and a sense of purpose.<br></br>{" "}
                <br></br>Our clients benefit not only from the fast-paced,
                efficient delivery of their projects but also from the assurance
                that they're working with a team of passionate individuals who
                are dedicated to making their web application dreams a reality.
                <br />
              </p>
            </div>
            <div class="about-img">
              <dotlottie-player
                src="https://lottie.host/c40d7023-ebac-4527-841c-fd02fdaf7195/lKpZvU1ecF.json"
                background="transparent"
                speed="1"
                style={{ width: "70vh", height: "70vh" }}
                direction="1"
                mode="normal"
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
