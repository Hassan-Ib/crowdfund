import React from "react";
import { useStockModal } from "../../Provider/StockModalProvider";
import Modal from "../Modal";
import StockList from "./StockList";
const Index = () => {
  const { isOpen, closeModal } = useStockModal();
  return (
    <Modal isOpen={isOpen}>
      <section className="relative w-full max-w-3xl bg-white px-6 sm:px-8 md:px-12 py-12 rounded-xl">
        <article className="mb-6">
          <h3 className="card-header mb-4">Back this project</h3>
          <p className="text-pale text-base sm:text-lg">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </article>
        <StockList />
        <button
          aria-label="close modal"
          onClick={closeModal}
          className="absolute right-8 top-10 font-semibold text-lg">
          X
        </button>
      </section>
    </Modal>
  );
};

export default Index;
