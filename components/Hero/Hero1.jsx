import React from 'react'
import AnimateSVG from '../AnimateSVG/AnimateSVG';
import style from "./Hero.module.css";
import Button1 from '../Shared/Button1';
import Logo from '../Shared/Logo';
import image from "../../public/images/bg-1.jpg"

const fontStyle = {
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "'Julius Sans One', sans-serif"
  };

  const bgStyles = {
    backgroundImage: ` linear-gradient(transparent, black ), url(${image.src})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

function Hero1() {
  return (
    <>
        <div className='w-full h-screen flex flex-col justify-center items-center' style={bgStyles}>
            <Logo />
            <AnimateSVG />
            <p className={style.helloText} style={fontStyle} >Web Developer | Technical Head @ E-Cell NIT Silchar | EE NITS'24</p>
            <Button1 name="Explore more" bcolor="whites" href="#AboutMe"/>
        </div>
    </>
  )
}

export default Hero1