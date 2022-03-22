import React from "react";
import { Stock } from "../../utils/stockData";

const Index = ({
  name,
  minimum,
  amountLeft,
  description,
  disabled = false,
}: Stock) => {
  return (
    <section
      className={`${
        disabled ? "opacity-40" : " "
      } border border-slate-300 rounded-xl my-6 p-8 flex flex-col gap-4`}>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between ">
        <h5 className="capitalize font-bold text-xl">{name}</h5>
        <p className="text-pale text-lg text-slate-400">
          Pledge ${minimum} or more
        </p>
      </div>
      <p className="text-pale">{description}</p>
      <div className="flex flex-col gap-3 justify-end md:flex-row md:justify-between md:items-center">
        <p className="text-xl font-semibold ">
          {amountLeft}{" "}
          <span className="text-sm text-pale font-normal">left </span>
        </p>
        <button
          disabled={disabled}
          className={`btn ${
            disabled
              ? "btn-secondary hover:translate-y-0 shadow-none"
              : "btn-primary"
          }`}>
          {" "}
          Select Reward{" "}
        </button>
      </div>
    </section>
  );
};

export default Index;
