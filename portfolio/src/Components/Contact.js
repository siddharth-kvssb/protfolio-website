import React from "react";
import "../Styles/Contact.css";
import img from "../Assets/contact.svg";
function Contact() {
  return (
    <div class="contact-wrap">
      <h1 class="contact-title">CONTACT US</h1>
      <div>
        {" "}
        <img src="" height="68px" width="240px" />
      </div>
      <div>
        <h3>Do you want to reach out to us ?</h3>
        <h3>email to us at :</h3>
        <h3>contact :</h3>
        <div class="contact-img">
          {" "}
          <dotlottie-player
            src="https://lottie.host/2b16f63f-b499-419f-a941-87f75c0b3b8b/oVgmqTK8yb.json"
            background="transparent"
            speed="1"
            style={{ width: "60vh", height: "60vh" }}
            direction="1"
            mode="normal"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
