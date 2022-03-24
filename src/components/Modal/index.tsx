import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
type Props = {
  isOpen: boolean;
  children: ReactNode;
};
const Modal = ({ children, isOpen }: Props) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      aria-hidden={!isOpen}
      role="dialog"
      className="fixed z-10 top-0 left-0 w-full h-screen bg-black bg-opacity-50"
      aria-modal="true">
      <div className="px-2 sm:px-4 w-full py-8 h-full overflow-y-scroll">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
