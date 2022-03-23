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
        <h1 id="introductory card" className="text-2xl font-bold mb-2">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="opacity-80 mb-8 ">
          A beautiful '&' handcrafted monitor stand to reduce neck and eye
          strain
        </p>
        <div className="flex flex-col items-center  gap-4  sm:flex-row sm:items-stretch justify-between">
          <button onClick={openModal} className="btn btn-primary">
            Back this project
          </button>
          <button
            aria-label="bookmark"
            className="btn relative bg-slate-100 pl-16">
            <span className="absolute left-0 top-0 w-12  h-12 sm:h-full rounded-full border border-black ">
              <img
                src="https://crowdfung.netlify.app/static/media/icon-bookmark.7777f8ecb9146d532ec6d401ce72f26e.svg"
                alt="bookmark icon"
                className="w-full h-full object-cover object-center"
              />
            </span>
            <span className="hidden invisible md:inline md:visible">
              Bookmark
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Index;
