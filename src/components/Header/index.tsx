import React from "react";
import Navbar from "./Navbar";
type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="prelative bg-hero bg-cover bg-bottom bg-no-repeat h-[300px] md:h-[500px] ">
      <div className="p-4 bg-black bg-opacity-40 h-full sm:px-14 lg:px-32 ">
        <Navbar />
      </div>
    </header>
  );
};

export default Hero;
