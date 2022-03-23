import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Stock } from "../../utils/stockData";
import { useStock } from "../../Provider/StockProvider";
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

  const textInputHandler: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setPledge(Number(e.target.value));
  };

  //   console.log(pledge, backed, backer);

  return (
    <section
      className={`border border-slate-400 rounded-lg my-6 flex flex-col gap-4 divide-y-2`}>
      <label
        onFocus={openTab}
        className="p-6 w-full cursor-pointer grid gap-4 place-content-center md:grid-cols-2 ">
        <div className="flex items-center text-xl font-bold capitalize tracking-wide gap-6 ">
          <input type="radio" name="pledge" id={name} />
          <p>{name}</p>
        </div>

        <p className="px-9 md:flex-1 md:row-start-2 md:col-span-2">
          {description}
        </p>
        <p className="px-9 text-xl font-bold  md:text-right">
          {amountLeft} <span className="text-sm font-normal">left</span>
        </p>
      </label>
      {/* other half */}
      {open ? (
        <div className="py-6 flex flex-col gap-4 px-6  md:flex-row md:justify-between md:items-center">
          <input
            type="number"
            min={minimum}
            placeholder="Enter your pledge"
            onChange={textInputHandler}
            className=" border-slate-400 text-center outline-none py-2 text-sm focus:border-b "
          />
          <div className="flex justify-center gap-10">
            <button
              className="btn btn-secondary"
              onClick={() => {
                updatePledge(minimum);
              }}>
              $ {minimum}
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                updatePledge(pledge);
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
