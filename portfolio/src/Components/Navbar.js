import React from "react";
import "../Styles/Navbar.css";
//import img from "../Assets/NavbarLogo-Anaadyanta.svg";
function Navbar() {
  return (
    <div class="sticky">
      <div class="nav1">
        <div>
          <img src="" height="68px" width="240px" />
        </div>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>

        <ul class="ul">
          <li class="li">
            <a href="#home">Home</a>
          </li>
          <li class="li">
            <a href="#About">About</a>
          </li>
          <li class="li">
            <a href="#skills">SKills</a>
          </li>

          <li class="li">
            <a href="#newPrizes">Projects</a>
          </li>

          <li class="li">
            <a href="#footer">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
