import React from "react";
import Header from "./components/Header";
import IntroCard from "./components/IntroCard";
function App() {
  return (
    <div className="">
      <Header />
      <main className="w-full max-w-2xl px-4 mx-auto -mt-40">
        <section aria-labelledby="introductory card">
          <IntroCard />
        </section>
      </main>
    </div>
  );
}

export default App;
