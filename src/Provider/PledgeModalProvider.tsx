import React from "react";
import useModal, { ModalContent } from "../hooks/useModal";

export type Context = ModalContent;

const inttialContext = {
  isOpen: false,
};

const PledgeModalContext = React.createContext<Context>(inttialContext);

type Props = {
  children: React.ReactNode;
};

const PledgeModalProvider = (props: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  console.log("isOpen form pledge", isOpen);
  return (
    <PledgeModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {props.children}
    </PledgeModalContext.Provider>
  );
};

export const usePledgeModal: () => ModalContent = () => {
  return React.useContext(PledgeModalContext);
};

export default PledgeModalProvider;
