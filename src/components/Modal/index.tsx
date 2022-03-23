import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
type Props = {
  isOpen: boolean;
  // onClose?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};
const Modal = ({ children, isOpen }: Props) => {
  //   const { isOpen, closeModal: onClose } = useModal();
  console.log("modal open");
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      //   role="dialog"
      aria-hidden={!isOpen}
      className="fixed z-10 top-0 left-0 w-full h-screen bg-black bg-opacity-40 flex items-center justify-center px-2 sm:px-4"
      aria-modal="true">
      {children}
    </div>,
    document.body
  );
};

export default Modal;
