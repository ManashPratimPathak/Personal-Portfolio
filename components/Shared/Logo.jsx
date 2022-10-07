import React from "react";
import Image from 'next/image'
import LogoPic from '../../public/images/LogoPic.svg'

const style = {
        filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"
    }

function Logo() {
  return (
    <>
      <div className=" absolute top-[1rem] left-[5rem] flex w-[100px] h-[100px] ">
        <Image src={LogoPic} style={style}/>
      </div>
    </>
  );
}

export default Logo;
