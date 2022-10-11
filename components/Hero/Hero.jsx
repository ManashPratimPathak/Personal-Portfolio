import React from "react";
import Image from "next/image";
import style from "./Hero.module.css";
import CoffeePic from "../../public/images/CoffeePic.svg";
import Logo from "../Shared/Logo";
import Button1 from "../Shared/Button1";
import AnimatedTextCharacter from "../AnimatedText/AnimatedTextCharacter";

const svgShadow = {
  filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
};

function Hero() {
  return (
    <div className="w-full h-screen flex justify-around bg-[#FF0063] bg-fixed bg-center bg-no-repeat bg-cover">
      <Logo />
      <div className="pl-[5rem] mb-[3rem] w-[70%] h-full flex flex-col justify-center">
        <h1 className={style.helloText} style={{ fontSize: "2.5rem" }}>
          konnichiwa!!!{" "}
          <span className={style.helloText} style={{ fontSize: "1rem" }}>
            Watashi
          </span>
        </h1>
        <AnimatedTextCharacter text="Manash Pratim Pathak" />
        <h4 className={style.helloText}>
          Web Developer | <span style={{color:"white"}}>Technical Head</span> @ E-Cell NIT Silchar | EE NITS'24
        </h4>
        <Button1 name="Explore More" href="#AboutMe" />
      </div>
      <div className="w-[30%] h-full flex flex-col justify-center">
        <Image src={CoffeePic} width="600px" style={svgShadow} />
      </div>
    </div>
  );
}

export default Hero;
