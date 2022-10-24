import React, { Component } from "react";
import Image from "next/image";
import html from "../../public/skill-logos/html.svg";
import css from "../../public/skill-logos/css3.svg";
import javascript from "../../public/skill-logos/javascript.svg";
import nodejs from "../../public/skill-logos/nodejs.svg";
import expressJs from "../../public/skill-logos/expressJs.svg";
import jquery from "../../public/skill-logos/jquery.svg";
import tailwindcss from "../../public/skill-logos/tailwindcss.svg";
import bootstrap from "../../public/skill-logos/bootstrap.png";
import materialui from "../../public/skill-logos/materialui.svg";
import react from "../../public/skill-logos/react.svg";
import nextjs from "../../public/skill-logos/nextjs.svg";
import restapi from "../../public/skill-logos/restapi.png";
import googlecloud from "../../public/skill-logos/googlecloud.svg";
import mongodb from "../../public/skill-logos/mongodb.png";
import mysql from "../../public/skill-logos/mysql.png";
import azure from "../../public/skill-logos/azure.svg";

const GradientStyle = {
  fontFamily: "'Julius Sans One', sans-serif",
  color: "white"
}

const GoogleFont = {
  fontFamily: "'Cormorant Garamond', serif",
  color: "white"
}


export class Skills extends Component {
  render() {
    return (
      <>
        <div className="w-full h-[75vh] flex flex-col justify-center items-center " >
          <div className="text-center">
            <p
              className="text-[2.5rem] pb-[2.5rem]"
              style={GradientStyle}
            >
              {" "}
              Honestly, I know <span style={GoogleFont}>Googling!</span>
            </p>
          </div>
          <div className="w-[80%] h-[auto] flex flex-wrap items-start justify-center gap-[2rem] scale-[0.93]">
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={html}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={css}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px]  opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={javascript}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px]  opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={nodejs}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={expressJs}
              width="150px"
              height="100px"
            />
            <Image
              className="rounded-[20px]  opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={jquery}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={tailwindcss}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={bootstrap}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={materialui}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={react}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={nextjs}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={mongodb}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={mysql}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={restapi}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={googlecloud}
              width="100px"
              height="100px"
            />
            <Image
              className="rounded-[20px] opacity-[0.75] hover:opacity-[0.95] hover:scale-[0.8] duration-[250ms]"
              src={azure}
              width="100px"
              height="100px"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Skills;
