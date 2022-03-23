import React, { createContext } from "react";
import useModal from "../hooks/useModal";
interface IStockModalProvider {
  isOpen: boolean;
  closeModal?: () => void;
  openModal?: () => void;
}
export const ModalContext = createContext<IStockModalProvider>(
  {} as IStockModalProvider
);

type Props = {
  children: React.ReactNode;
};
export const StockModalProvider = ({ children }: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useStockModal = () => {
  const modalContextData = React.useContext(ModalContext);
  return modalContextData;
};
