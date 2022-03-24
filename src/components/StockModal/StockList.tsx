import React from "react";
import StockModalCard from "./StockModalCard";
import { stockData } from "../../utils/stockData";

type Props = {};

const StockList = (props: Props) => {
  const [openState, setOpenState] = React.useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const openTab = (index: number) => () => {
    setOpenState((prev) => {
      const newState = prev.map((el, prevIndex) => {
        if (prevIndex === index) return !el;
        return false;
      });
      return newState;
    });
  };
  return (
    <ul>
      {stockData.map((stock, index) => (
        <li key={index}>
          <StockModalCard
            {...stock}
            open={openState[index]}
            openTab={openTab(index)}
          />
        </li>
      ))}
    </ul>
  );
};

export default StockList;
