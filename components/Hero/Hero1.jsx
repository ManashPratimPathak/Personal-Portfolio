import React from 'react'
import style from "./Hero.module.css";
import Button1 from '../Shared/Button1';
import Image from 'next/image'
import bg1 from '../../public/images/1.png'
import bg2 from '../../public/images/2.svg'


const fontStyle = {
    color: "#7a52a4",
    fontSize: "1rem",
    fontFamily: "'Julius Sans One', sans-serif"
  };

function Hero1() {
  return (
    <>
        <div className='w-full h-screen flex flex-row bg-white'>
        <div className='w-[60vw] h-screen flex flex-col justify-center'>
        <h1 className={style.helloText} style={{color: "#7a52a4", fontSize: "3.5rem", fontFamily: "'Julius Sans One', sans-serif", textAlign: "left "}} >Manash Pratim Pathak</h1>
            <p className={style.helloText} style={fontStyle} >Web Developer | Technical Head @ E-Cell NIT Silchar | EE NITS'24</p>
            <Button1 name="Explore more" bcolor="whites" href="#AboutMe"/>
        </div>
        <div className=' relative w-[20vw] h-screen flex flex-col justify-center items-center'>
          <Image src={bg2} layout="fill"/>
        </div>
        <div className=' relative w-[20vw] h-screen flex flex-col justify-center items-center'>
          <Image src={bg1} layout="fill"/>
        </div>
            
        </div>
    </>
  )
}

export default Hero1