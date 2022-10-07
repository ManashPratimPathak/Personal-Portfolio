import React from 'react'

const fontStyle = {
    fontFamily: "'Julius Sans One', sans-serif",
}

function button1() {
  return (
    <div>
    <button href="#" className='mt-[2rem] px-[0.5rem] border-solid border-black border text-[1.5rem] duration-[250ms] hover:scale-[0.93] hover:bg-[white]' style={fontStyle}> Explore More</button> 
    </div>
  )
}

export default button1