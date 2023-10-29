import React from "react";
import "../Styles/Contact.css";
import img from "../Assets/contact.svg";
function Contact() {
  return (
    <div class="contact-wrap">
      <h2>CONTACT US</h2>
      <div class="contact-flex">
        <div>
          <div class="contact-details">
            <img src="" height="68px" width="240px"></img>
            <h3>If you want your website to stand out</h3>
            <h3>email to us at :</h3>
            <h3>contact :</h3>
            <h3>Follow us:</h3>
          </div>
        </div>
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
