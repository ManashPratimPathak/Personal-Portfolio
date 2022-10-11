import React, { Component } from 'react'
import Image from "next/image"
import html from "../../public/skill-logos/html.svg"
import css from "../../public/skill-logos/css3.svg"
import javascript from "../../public/skill-logos/javascript.svg"
import nodejs from "../../public/skill-logos/nodejs.svg"
import expressJs from "../../public/skill-logos/expressJs.svg"
import jquery from "../../public/skill-logos/jquery.svg"
import tailwindcss from "../../public/skill-logos/tailwindcss.svg"
import bootstrap from "../../public/skill-logos/bootstrap.png"
import materialui from "../../public/skill-logos/materialui.svg"
import react from "../../public/skill-logos/react.svg"
import nextjs from "../../public/skill-logos/nextjs.svg"
import restapi from "../../public/skill-logos/restapi.png"
import googlecloud from "../../public/skill-logos/googlecloud.svg"
import mongodb from "../../public/skill-logos/mongodb.png"
import mysql from "../../public/skill-logos/mysql.png"
import azure from "../../public/skill-logos/azure.svg"

export class Skills extends Component {
  render() {
    return (
      <>
        <div className='w-full h-[75vh] bg-white flex flex-col justify-center items-center'>
        <div className='text-center'><p className='text-[2.5rem] pb-[2.5rem]'style={{ fontFamily: "'Julius Sans One', sans-serif" }}> Honestly, I know Googling!</p></div>
            <div className='w-[80%] h-[auto] flex flex-wrap items-start justify-center gap-[2rem]'>

                <Image src={html} width="100px" height="100px"/>
                <Image src={css} width="100px" height="100px"/>
                <Image src={javascript} width="100px" height="100px"/>
                <Image src={nodejs} width="100px" height="100px"/>
                <Image src={expressJs} width="150px" height="100px"/>
                <Image src={jquery} width="100px" height="100px"/>
                <Image src={tailwindcss} width="100px" height="100px"/>
                <Image src={bootstrap} width="100px" height="100px"/>
                <Image src={materialui} width="100px" height="100px"/>
                <Image src={react} width="100px" height="100px"/>
                <Image src={nextjs} width="100px" height="100px"/>
                <Image src={mongodb} width="100px" height="100px"/>
                <Image src={mysql} width="100px" height="100px"/>
                <Image src={restapi} width="100px" height="100px"/>
                <Image src={googlecloud} width="100px" height="100px"/>
                <Image src={azure} width="100px" height="100px"/>
            </div>
        </div>
      </>
    )
  }
}

export default Skills