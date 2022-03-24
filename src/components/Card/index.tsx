import React from "react";

type Props = {
  children: React.ReactNode;
};

const Index = ({ children }: Props) => {
  return (
    <section className="relative px-6 md:px-10 py-16 rounded-2xl shadow-xl card-shadow my-10 bg-white">
      {children}
    </section>
  );
};

export default Index;
