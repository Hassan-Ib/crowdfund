import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Stock } from "../../utils/stockData";
type Props = Stock;

const StockModalCard = ({
  minimum,
  name,
  amountLeft,
  disabled,
  description,
}: Props) => {
  const [pledge, setPledge] = React.useState(minimum);
  const textInputHandler: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setPledge(Number(e.target.value));
  };
  return (
    <label
      htmlFor={name}
      className="border border-slate-400 px-6 py-8 rounded-lg block my-6">
      <div className="flex items-center text-xl font-bold capitalize tracking-wide gap-4 ">
        <input type="radio" name="pledge" id={name} />
        <p>{name}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your pledge"
          onChange={textInputHandler}
          value={pledge}
        />
        <div>
          <button>$ {minimum}</button>
          <button>continue</button>
        </div>
      </div>
    </label>
  );
};

export default StockModalCard;
