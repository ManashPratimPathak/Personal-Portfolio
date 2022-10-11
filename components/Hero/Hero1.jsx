import React from 'react'
import Image from "next/image";
import AnimateSVG from '../AnimateSVG/AnimateSVG';
import style from "./Hero.module.css";
import Button1 from '../Shared/Button1';
import Logo from '../Shared/Logo';

const fontStyle = {
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "'Julius Sans One', sans-serif"
  };

function Hero1() {
  return (
    <>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <Logo />
            <AnimateSVG />
            <p className={style.helloText} style={fontStyle} >Web Developer | Technical Head @ E-Cell NIT Silchar | EE NITS'24</p>
            <Button1 name="Explore more" bcolor="whites" href="#AboutMe"/>
        </div>
    </>
  )
}

export default Hero1