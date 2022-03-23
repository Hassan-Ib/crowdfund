import React from "react";
import Header from "./components/Header";
import IntroCard from "./components/IntroCard";
import AccoutTotalsCard from "./components/AccoutTotalsCard";
import About from "./components/About";
import StockProvider from "./Provider/StockProvider";
import { StockModalProvider } from "./Provider/StockModalProvider";
function App() {
  return (
    <div className="">
      <Header />
      <main className="w-full max-w-[750px] px-4 mx-auto -mt-40">
        <section aria-labelledby="introductory card">
          <StockModalProvider>
            <IntroCard />
            <StockProvider>
              <AccoutTotalsCard />
              <About />
            </StockProvider>
          </StockModalProvider>
        </section>
      </main>
    </div>
  );
}

export default App;
