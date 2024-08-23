import React from "react";
import { BsLinkedin, BsGithub, BsFillEnvelopePaperFill } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div
      style={{ cursor: "pointer" }}
      onClick={() =>
        window.open("https://www.linkedin.com/in/shefali-sawant-a18448191/")
      }
    >
      <BsLinkedin />
    </div>
    <div
      style={{ cursor: "pointer" }}
      onClick={() => window.open("https://github.com/shefalisawant")}
    >
      <BsGithub />
    </div>
    <div
      style={{ cursor: "pointer" }}
      onClick={() => window.open("mailto:shefalisawant99@gmail.com")}
    >
      <BsFillEnvelopePaperFill />
    </div>
  </div>
);

export default SocialMedia;
