import React from "react";
import "./styles.css";
import Navbar from "./componets/navbar/Navbar";
import bckgrndMov from "./componets/video/background.webm";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <video autoPlay loop muted
      style={{
        position: "fixed",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
      }}>
        <source className="backgroundVideo"  src={bckgrndMov} type="video/mp4"/>
      </video>
      <div className="rectangle" >
        <h1 className= "homeText">
          Ethan Houseworth
        </h1>
        <p className= "homeParagraph">
          sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph 
        </p>
        <h1 className= "mySocials">
          My social media
        </h1>
        <a href="https://www.instagram.com/ethanhouseworth/">
          <button className="button1">
          <i class="fab fa-instagram fa-7x"></i>
          </button>
        </a>
        <a href="https://twitter.com/ethanhouse99">
          <button className="button2">
          <i class="fab fa-twitter fa-7x"></i>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/ethan-houseworth-43481b19a/">
          <button className="button2">
          <i class="fab fa-linkedin-in fa-7x"></i>
          </button>
        </a>
        <a href="https://github.com/ehous3">
          <button className="button2">
          <i class="fab fa-github fa-7x"></i>
          </button>
        </a>
      </div>
      <div className="aboutDiv">
        <div className="titleDiv">
          <h>
            About Me
          </h>
        </div>
      </div>
    </div>
  );
}