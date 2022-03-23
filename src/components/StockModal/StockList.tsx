import React from "react";
import StockModalCard from "./StockModalCard";
import { stockData } from "../../utils/stockData";
type Props = {};

const StockList = (props: Props) => {
  return (
    <ul>
      {stockData.map((stock, index) => (
        <li key={index}>
          <StockModalCard {...stock} />
        </li>
      ))}
    </ul>
  );
};

export default StockList;
