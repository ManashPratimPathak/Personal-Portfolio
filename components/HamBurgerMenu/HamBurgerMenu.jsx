function HamBurgerMenu() {
  return (
    <>
      <nav className="absolute w-full h-[15vh] flex justify-center items-center">
        <ul className="lg:hidden w-[70vw] h-full flex  justify-evenly items-center text-white ">
          <li className="text-[1rem]">
            <a href="#">Home</a>
          </li>
          <li className="text-[1rem]">
            <a href="#">About Me</a>
          </li>
          <li className="text-[1rem]">
            <a href="#">Skill</a>
          </li>
          <li className="text-[1rem]">
            <a href="#">Experience</a>
          </li>
          <li className="text-[1rem]">
            <a href="#">Education</a>
          </li>
          <li className="text-[1rem]">
            <a href="#">Certificates</a>
          </li>
          <li className="text-[1rem]">
            <a href="#">Projects</a>
          </li>
          <li className="text-[1rem]">
            <a href="#">Competitions</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HamBurgerMenu;
