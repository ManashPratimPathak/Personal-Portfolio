function HamBurgerMenu() {
  return (
    <>
      <div className="absolute h-[10vh] w-full">{/* burger-icon */}</div>
      <nav className="absolute md:hidden  w-full h-screen flex justify-center items-center bg-black">
        <ul className="w-full h-[75vh] flex flex-col justify-evenly items-center text-white bg-[black]">
          <li className="text-[1.5rem]">
            <a href="#">Home</a>
          </li>
          <li className="text-[1.5rem]">
            <a href="#">About Me</a>
          </li>
          <li className="text-[1.5rem]">
            <a href="#">Skill</a>
          </li>
          <li className="text-[1.5rem]">
            <a href="#">Experience</a>
          </li>
          <li className="text-[1.5rem]">
            <a href="#">Education</a>
          </li>
          <li className="text-[1.5rem]">
            <a href="#">Certificates</a>
          </li>
          <li className="text-[1.5rem]">
            <a href="#">Projects</a>
          </li>
          <li className="text-[1.5rem]">
            <a href="#">Competitions</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HamBurgerMenu;
