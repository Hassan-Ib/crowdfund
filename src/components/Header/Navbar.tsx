import React from "react";
import Navlinks from "./Navlinks";
type Props = {};

const Navbar = (props: Props) => {
  const [openNav, setOpenNav] = React.useState<Boolean>(false);
  const toggleNavbar = function (): void {
    console.log(openNav);
    setOpenNav(!openNav);
  };
  return (
    <nav className="flex tracking-wider py-6 ">
      {/* logo */}
      <p className="flex-1 text-2xl md:text-xl font-bold text-white">
        crowdfund
      </p>
      {/* links */}
      <Navlinks className="hidden invisible text-white text-lg md:flex gap-10 capitalize md:visible" />
      <Navlinks
        className={`absolute -left-full top-28 w-full h-screen invisible flex flex-col justify-center items-center gap-6 bg-white capitalize font-bold transition-all duration-500 ease-in-out ${
          openNav ? "move-in" : ""
        } md:invisible md:hidden`}
      />
      <button
        onClick={toggleNavbar}
        className="md:hidden"
        aria-label="navigation link toggle show and hide">
        <div className="h-[3px] w-6 bg-white mb-1"></div>
        <div className="h-[3px] w-6 bg-white mb-1"></div>
        <div className="h-[3px] w-6 bg-white mb-1"></div>
      </button>
    </nav>
  );
};

export default Navbar;
