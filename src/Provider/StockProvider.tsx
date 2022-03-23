import React, { createContext, ReactNode, useContext, useState } from "react";

const pledgeDefault = {
  backed: 89934,
  backer: 5008,
};

interface IStockAccount {
  backed: number;
  backer: number;
  updatePledge: (value: number) => void;
}

const StockContext = createContext({} as IStockAccount);

type Props = {
  children: ReactNode;
};

export const StockProvider = ({ children }: Props) => {
  const [pledge, setPledge] = useState(pledgeDefault);
  const updatePledge = (value: number): void => {
    console.log(" value passed to updatePledge", value);

    setPledge((prev) => {
      const newBacked = prev.backed + value;
      const newBacker = prev.backer + 1;
      return { ...prev, backed: newBacked, backer: newBacker };
    });
  };
  return (
    <StockContext.Provider value={{ ...pledge, updatePledge }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = () => {
  return useContext(StockContext);
};

export default StockProvider;
