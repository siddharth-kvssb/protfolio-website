import React from "react";
import "../Styles/Prizing.css";
function Prizing() {
  return (
    <div class="prizing-wrap">
      <h2> Pricing Tables</h2>

      <div class="columns">
        <ul class="price">
          <li class="header">Basic</li>
          <li class="grey">$ 9.99 / year</li>
          <li>10GB Storage</li>
          <li>10 Emails</li>
          <li>10 Domains</li>
          <li>1GB Bandwidth</li>
          <li class="grey"></li>
        </ul>
      </div>

      <div class="columns">
        <ul class="price">
          <li class="header">Pro</li>
          <li class="grey">$ 24.99 / year</li>
          <li>25GB Storage</li>
          <li>25 Emails</li>
          <li>25 Domains</li>
          <li>2GB Bandwidth</li>
          <li class="grey"></li>
        </ul>
      </div>

      <div class="columns">
        <ul class="price">
          <li class="header">Premium</li>
          <li class="grey">$ 49.99 / year</li>
          <li>50GB Storage</li>
          <li>50 Emails</li>
          <li>50 Domains</li>
          <li>5GB Bandwidth</li>
          <li class="grey"></li>
        </ul>
      </div>
    </div>
  );
}

export default Prizing;
