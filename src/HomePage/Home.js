import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div class="content">
        <h3>
          <span>the best</span> courses you will find find here!
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laborum ut minus corrupti dolorum dolore assumenda iste voluptate
          dolorem pariatur.
        </p>
        <button className="join">
          {" "}
          <span>Join for free</span>
        </button>
        <div class="icons">
          <a href="#" class="fb">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="#" class="twitter">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="#" class="insta">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#" class="git">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="#" class="yt">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
