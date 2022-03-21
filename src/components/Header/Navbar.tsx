import React from "react";

type Props = {};

type Link = {
  name: string;
  to: string;
};
const links: Array<Link> = [
  {
    name: "about",
    to: "/",
  },
  {
    name: "Discover",
    to: "/",
  },
  {
    name: "Get Started",
    to: "/",
  },
];

const Navbar = (props: Props) => {
  const [openNav, setOpenNav] = React.useState<Boolean>(false);
  const toggleNavbar = function (): void {
    console.log(openNav);
    setOpenNav(!openNav);
  };
  return (
    <nav className="relative flex tracking-wider py-6 ">
      {/* logo */}
      <p className="flex-1 text-2xl md:text-xl font-bold text-white">
        crowdfund
      </p>
      {/* links */}
      <ul
        className={`absolute opacity-0 top-full -left-full w-full h-screen flex flex-col justify-center items-center gap-6 bg-white capitalize font-bold transform move-out transition  ${
          openNav ? "move-in" : ""
        } md:transition-none md:move-in md:relative md:top-0 md:flex-row md:w-auto md:h-auto md:gap-10 md:bg-transparent md:text-white md:font-normal`}>
        {links.map((link, index) => (
          <li key={index}>
            {" "}
            <a href={link.to}>{link.name}</a>
          </li>
        ))}
      </ul>

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
