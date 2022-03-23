import React from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };
  return { isOpen, openModal, closeModal };
};

export default useModal;
