import React from "react";
import Card from "../Card";
type Props = {};

const Index = (props: Props) => {
  return (
    <Card>
      <div className=" flex flex-col gap-6 divide-y-2 md:divide-y-0 md:divide-x-2 md:flex-row justify-center items-center">
        {/* backed cash */}
        <h3 id="total backed by" className="text-2xl font-bold flex flex-col">
          $ 89,934
          <span className=" text-sm font-normal opacity-80">
            of $100,000 backed
          </span>
        </h3>
        {/* backers num */}
        <h3 id="total backer" className="text-2xl font-bold flex flex-col px-4">
          5,008
          <span className=" text-sm font-normal opacity-80">total backers</span>
        </h3>
        {/* total days left */}
        <h3 id="days left" className="text-2xl font-bold flex flex-col px-4">
          56
          <span className=" text-sm font-normal opacity-80">days left</span>
        </h3>
      </div>
      <div className=" rounded-lg h-3 md:h-4 bg-slate-200 mt-10">
        <div className="h-full w-[70%] bg-slate-400 rounded-lg"></div>
      </div>
    </Card>
  );
};

export default Index;
