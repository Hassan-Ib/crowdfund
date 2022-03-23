import React from "react";
import Card from "../Card";
import StockList from "../StockList";
// import useModal from "../../hooks/useModal";
import { StockModalProvider } from "../../Provider/StockModalProvider";
import StockModal from "../StockModal";

const Index = () => {
  return (
    <Card>
      <section aria-labelledby="about">
        <article>
          <h4 id="about" className="text-lg font-semibold mb-6">
            About Section
          </h4>

          <p className="text-pale mb-3">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay
          </p>
          <p className="text-pale">
            Focused on the task at hand. Featuring artisan craftsmanship, the
            simplicity of design creates extra desk space below your computer to
            allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
        </article>
      </section>
      <StockModalProvider>
        <StockModal />
        <StockList />
      </StockModalProvider>
    </Card>
  );
};

export default Index;
