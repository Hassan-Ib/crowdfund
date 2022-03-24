import React from "react";
export type ModalContent = {
  isOpen: boolean;
  openModal?: () => void;
  closeModal?: () => void;
};

const useModal: () => ModalContent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = (): void => {
    // console.log("open modal ", isOpen);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    // console.log("close modal", isOpen);
    setIsOpen(false);
  };
  return { isOpen, openModal, closeModal };
};

export default useModal;
