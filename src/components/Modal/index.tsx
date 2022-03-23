import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
type Props = {
  isOpen: boolean;
  // onClose?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};
const Modal = ({ children, isOpen }: Props) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      aria-hidden={!isOpen}
      role="dialog"
      className="fixed z-10 top-0 left-0 w-full overflow-auto pt-44 h-screen bg-black bg-opacity-50 flex items-center justify-center px-2 sm:px-4"
      aria-modal="true">
      {children}
    </div>,
    document.body
  );
};

export default Modal;
