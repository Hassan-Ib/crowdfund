import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Stock } from "../../utils/stockData";
import { useStock } from "../../Provider/StockProvider";
import { usePledgeModal } from "../../Provider/PledgeModalProvider";
import { useStockModal } from "../../Provider/StockModalProvider";

type Props = Stock & {
  open: boolean;
  openTab: () => void;
};

const StockModalCard = ({
  minimum,
  name,
  amountLeft,
  disabled,
  description,
  open,
  openTab,
}: Props) => {
  const [pledge, setPledge] = React.useState<number>(minimum);
  const { updatePledge } = useStock();
  const { openModal } = usePledgeModal();
  const { closeModal } = useStockModal();
  const textInputHandler: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setPledge(Number(e.target.value));
  };

  //   console.log(disabled);
  return (
    <section
      //   onFocus={openTab}
      className={`${
        disabled ? "disabled" : ""
      } relative border border-slate-400 rounded-xl my-6 flex flex-col gap-4 divide-y-2`}>
      <label
        className={`p-4 sm:p-6 w-full ${
          !disabled ? "cursor-pointer" : ""
        }  grid gap-4 place-content-center md:grid-cols-2 `}>
        <div className="flex items-center text-xl font-bold capitalize tracking-wide gap-3 sm:gap-6 ">
          <input
            type="radio"
            disabled={disabled}
            name="pledge"
            onChange={openTab}
            id={name}
          />
          <p className="card-header">{name}</p>
        </div>

        <p className="stock-card-body px-5 sm:px-9 md:flex-1 md:row-start-2 md:col-span-2">
          {description}
        </p>
        <p className="px-5 sm:px-9 text-xl font-bold  md:text-right">
          {amountLeft} <span className="text-sm font-normal">left</span>
        </p>
      </label>
      {/* other half */}
      {open && !disabled ? (
        <div
          className={`py-6 flex-col gap-4 px-6 flex md:flex-row md:justify-between md:items-center transition  duration-500 transform-all translate-y-0 " ${
            open && !disabled ? "" : ""
          }`}>
          <input
            type="number"
            min={minimum}
            placeholder="Enter your pledge"
            onChange={textInputHandler}
            className={`border-slate-400 text-center outline-none py-2 text-sm focus:border-b`}
          />
          <div className="flex justify-center gap-10">
            <button
              disabled={disabled}
              className={`btn btn-secondary ${disabled ? "disabled-btn" : ""}`}
              onClick={() => {
                openModal?.();
                updatePledge(minimum);
                closeModal?.();
              }}>
              $ {minimum}
            </button>
            <button
              disabled={disabled}
              className={`btn btn-primary ${disabled ? "disabled-btn" : ""}`}
              onClick={() => {
                openModal?.();
                updatePledge(pledge);
                closeModal?.();
              }}>
              continue
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default StockModalCard;
