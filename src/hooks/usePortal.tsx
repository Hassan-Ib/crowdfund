import React from "react";

const usePortal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const setOpen = (): void => {
    setIsOpen(!isOpen);
  };
  return [isOpen, setOpen];
};

export default usePortal;
