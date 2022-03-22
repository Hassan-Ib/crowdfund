import React from "react";
import Header from "./components/Header";
import IntroCard from "./components/IntroCard";
import AccoutTotalsCard from "./components/AccoutTotalsCard";
import About from "./components/About";
function App() {
  return (
    <div className="">
      <Header />
      <main className="w-full max-w-[750px] px-4 mx-auto -mt-40">
        <section aria-labelledby="introductory card">
          <IntroCard />
          <AccoutTotalsCard />
          <About />
        </section>
      </main>
    </div>
  );
}

export default App;
