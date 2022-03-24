import React from "react";
import { stockData } from "../../utils/stockData";
import StockCard from "../StockCard";

const StockList = () => {
  return (
    <ul>
      {stockData.map((stock, index) => (
        <li key={index}>
          <StockCard {...stock} />
        </li>
      ))}
    </ul>
  );
};

export default StockList;
