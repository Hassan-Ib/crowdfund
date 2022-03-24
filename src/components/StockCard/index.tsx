import React from "react";
import { Stock } from "../../utils/stockData";
// import useStockModal from "../../hooks/useStockModal";
import { useStockModal } from "../../Provider/StockModalProvider";

const Index = ({
  name,
  minimum,
  amountLeft,
  description,
  disabled = false,
}: Stock) => {
  const { openModal } = useStockModal();
  return (
    <section
      className={`${
        disabled ? "opacity-40" : " "
      } border border-slate-300 rounded-2xl my-6 px-6 py-8 md:p-8 flex flex-col gap-4`}>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between ">
        <h5 className="card-header">{name}</h5>
        <p className="text-pale text-base sm:text-lg">
          Pledge ${minimum} or more
        </p>
      </div>
      <p className="stock-card-body text-pale">{description}</p>
      <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-center">
        <p className="text-xl font-bold ">
          {amountLeft}{" "}
          <span className="text-sm text-pale font-normal">left </span>
        </p>
        <button
          disabled={disabled}
          onClick={openModal}
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
