import React from "react";
import Card from "../Card";
import { useStockModal } from "../../Provider/StockModalProvider";
type Props = {};

const Index = (props: Props) => {
  const { openModal } = useStockModal();
  return (
    <Card>
      <div className="text-center">
        <div className="absolute rounded-full w-16 h-16 left-1/2 -translate-x-1/2 -top-8 border border-black">
          <img
            src="https://crowdfung.netlify.app/static/media/logo-mastercraft.dca2a8312b376716a2e0b7dfb8828b86.svg"
            alt="logo"
            className="w-full h-full object-cover object-center "
          />
        </div>
        <h1
          id="introductory card"
          className="text-xl md:text-2xl font-bold mb-2">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="mb-8 text-pale text-sm sm:text-base">
          A beautiful '&' handcrafted monitor stand to reduce neck and eye
          strain
        </p>
        <div className="flex items-center justify-center gap-8  sm:flex-row sm:items-stretch sm:justify-between">
          <button onClick={openModal} className="btn btn-primary">
            Back this project
          </button>
          <button aria-label="bookmark" className="btn btn-secondary">
            <span className="absolute -left-4 -top-1/2 sm:left-0 sm:top-0 w-12  h-12 sm:h-full rounded-full border border-black ">
              <img
                src="https://crowdfung.netlify.app/static/media/icon-bookmark.7777f8ecb9146d532ec6d401ce72f26e.svg"
                alt="bookmark icon"
                className="w-full h-full object-cover object-center"
              />
            </span>
            <span className="hidden invisible sm:inline sm:visible ml-8">
              Bookmark
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Index;
