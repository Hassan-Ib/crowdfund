import React from "react";
import Card from "../Card";
import { useStock } from "../../Provider/StockProvider";
import { formatToCurrency } from "../../utils/convertCurrencyFormat";

type Props = {};

const AccountTotalsCard = (props: Props) => {
  const { backed, backer } = useStock();
  // console.log("from acct", formatToCurrency(backed), backer);
  const formatedBacked = formatToCurrency(backed);
  const formatedBacker = formatToCurrency(backer);

  return (
    <Card>
      <div className=" flex flex-col divide-y-2 md:divide-y-0 md:divide-x-2 md:flex-row justify-center items-center">
        {/* backed cash */}
        <Account value={`$ ${formatedBacked}`} valueSub="of $100,000 backed" />
        <Account value={`${formatedBacker}`} valueSub="total backers" />
        <Account value={`56`} valueSub="days left" />
      </div>
      <div className=" rounded-lg h-3 md:h-4 bg-slate-200 mt-10">
        <div className="h-full w-[70%] bg-slate-400 rounded-lg"></div>
      </div>
    </Card>
  );
};

export default AccountTotalsCard;

type AccoutProps = {
  value: string;
  valueSub: string;
};
const Account = ({ value, valueSub }: AccoutProps) => {
  return (
    <h3
      id="total backer"
      className="card-header flex flex-col justify-center items-center p-4 sm:p-6 ">
      {value}
      <span className=" stock-card-body">{valueSub}</span>
    </h3>
  );
};
