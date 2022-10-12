import React from "react";

const fontStyle = {
  fontFamily: "'Julius Sans One', sans-serif",
};

function button1(props) {
  return (
    <>
      <button type=""
        
        className="mt-[2rem] px-[0.5rem] border-solid border-${props.bcolor} text-white border text-[1.5rem] duration-[250ms] hover:scale-[0.93] hover:bg-[white] hover:text-black"
        style={fontStyle}
      ><a href={props.href} >{props.name} </a> 
      </button>
    </>
  );
}

export default button1;
