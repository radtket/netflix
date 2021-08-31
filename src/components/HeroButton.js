import React from "react";

const HeroButton = ({ primary, text }) => {
  return (
    <a className="Button" data-primary={primary} href="#">
      {text}
    </a>
  );
};

export default HeroButton;
