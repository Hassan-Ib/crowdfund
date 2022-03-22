import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
type Props = {
  isOpen: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};
const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
      <button onClick={onClose}>Close</button>
    </div>,
    document.body
  );
};

export default Modal;
