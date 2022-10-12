import React from "react";

function AboutMe() {
  return (
    <>
      <div
        id="AboutMe"
        className="relative w-full h-[75vh] flex justify-center items-center"
      >
        <div className="w-[60%] h-full flex flex-col justify-center items-center">
          <h1
            className="mb-[2.5rem] text-center text-white text-[2.5rem]"
            style={{ fontFamily: "'Julius Sans One', sans-serif" }}
          >
            Wanna Know Me!
          </h1>
          <p
            className="text-center text-white text-[1.5rem]"
            style={{ fontFamily: "'Julius Sans One', sans-serif" }}
          >
            I am a pre-final year student of Electrical Engineering at the
            National Institute of Technology, Silchar. I have worked as a
            frontend Developer for various teams, fest, and Startup for the past
            year. Besides this, I also have experience working as a technical
            support member and organizer of events and workshops. Currently, I
            have been working as a technical Head of the Entrepreneurship Cell
            at NIT Silchar.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
