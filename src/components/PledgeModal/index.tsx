import React from "react";
import Modal from "../Modal";
type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const Index = ({ isOpen, closeModal }: Props) => {
  return (
    <Modal isOpen={isOpen}>
      <div>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          dolores ex sint tenetur :)
        </p>
        <button className="btn btn-primary" onClick={closeModal}>
          close
        </button>
      </div>
    </Modal>
  );
};

export default Index;
