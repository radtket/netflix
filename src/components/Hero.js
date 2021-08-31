import React from "react";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <div
      className="Hero"
      id="hero"
      style={{
        backgroundImage: "url(https://images.alphacoders.com/633/633643.jpg)",
      }}
    >
      <div className="content">
        <img
          alt="narcos background"
          className="logo"
          src="http://www.returndates.com/backgrounds/narcos.logo.png"
        />
        <h2>Season 2 now available</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.
        </p>
        <div className="button-wrapper">
          <HeroButton primary text="Watch now" />
          <HeroButton primary={false} text="+ My list" />
        </div>
      </div>
      <div className="overlay" />
    </div>
  );
};

export default Hero;
