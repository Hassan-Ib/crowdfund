import React from "react";
import Navbar from "./Navbar";
type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="bg-hero bg-cover bg-center h-[300px] md:h-[500px] ">
      <div className="p-4 bg-black bg-opacity-40 h-full md:px-32 md:pt-10">
        <Navbar />
      </div>
    </header>
  );
};

export default Hero;
