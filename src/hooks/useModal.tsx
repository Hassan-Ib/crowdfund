import React from "react";

const useModal = () => {
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
