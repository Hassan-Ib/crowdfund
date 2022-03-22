import React, { createContext, ReactNode, useContext, useState } from "react";

const StockContext = createContext<boolean | null>(null);

type Props = {
  children: ReactNode;
};

export const StockProvider = ({ children }: Props) => {
  const [first, setfirst] = useState(false);
  return (
    <StockContext.Provider value={{ first, setfirst }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = () => {
  return useContext(StockContext);
};

export default StockProvider;
